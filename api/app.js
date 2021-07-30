var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');

const fs = require('fs').promises;
const exec = require("child_process").execSync;

//DB API
const {getLoginData} = require('./algo')
const {newUserRegistration} = require('./algo')
const {ExtractUserData} = require('./algo')
const {UpdateUserData} = require('./algo')
const {ExtractPropertyData} = require('./algo')
const {ExtractPersonalPropertyData} = require('./algo')
const {DeletePersonalPropertyData} = require('./algo')
const {InsertPersonalPropertyData} = require('./algo')
const {extractSpecificProperty} = require('./algo')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.set('port', 9000);
app.use(bodyParser.urlencoded({ extended: 'true' }));
app.use(bodyParser.json());

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, AUTHORIZATION');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
//////////////////////////////////////////////////////////////////////

//Prediction API
app.post('/prediction-request/',async(req, res) => {

  // function
  console.log("called [/prediction-request/]")
  // get info from post request
  console.log(req.body)

  let filePath = `D:\\Mats\\fyp_backend\\api\\model\\`

  let writeFile = await fs.writeFile(filePath.concat("predictInfo.json"), JSON.stringify(req.body))
  
  let path = '"D:\\Mats\\fyp_backend\\api\\model\\Model_call.py"'
  
  let result = exec('python '+path);

  result = result.toString()

  console.log("Prediction completed.")

  res.send({details : "Data recieved for prediction...sending back result...", result : result});
});

//LOGIN API
app.post('/login-request/', async(req, res) => {

  console.log(req.body)

  let serverRes = await getLoginData(req.body)
  console.log(serverRes)

  res.send(serverRes)
});

//new user register
app.post('/new-user-register/', async(req, res) => {

  console.log(req.body)

  let serverRes = await newUserRegistration(req.body)
  console.log(serverRes)

  res.send({serverRes})
});

//extract user data
app.post('/user-data-request/', async(req, res) => {

  console.log(req.body)

  let serverRes = await ExtractUserData(req.body)
  console.log(serverRes)

  res.send({serverRes})
});


//Update profile
app.post('/update-profile-request/', async(req, res) => {

  console.log(req.body)

  let serverRes = await UpdateUserData(req.body)
  console.log(serverRes)

  res.send({serverRes})
});

//extract all property
app.post('/property-request/', async(req, res) => {

  console.log("Asked for all property data")

  let serverRes = await ExtractPropertyData(req.body)

  console.log(serverRes)

  let filePath = `D:\\Mats\\fyp_1\\src\\`

  let writeFile = await fs.writeFile(filePath.concat("propertyData.json"), JSON.stringify(serverRes))
  
  res.send({status:"Done"})
});


//extract personal property
app.post('/personal-property-request/', async(req, res) => {

  console.log(req.body)

  let serverRes = await ExtractPersonalPropertyData(req.body)
  console.log(serverRes)

  let filePath = `D:\\Mats\\fyp_1\\src\\`

  let writeFile = await fs.writeFile(filePath.concat("personalPropertyData.json"), JSON.stringify(serverRes))
  
  res.send({status:"Done"})
});


//Delete property
app.post('/delete-property-request/', async(req, res) => {

  console.log(req.body)

  let serverRes = await DeletePersonalPropertyData(req.body)
  console.log(serverRes)

  res.send({serverRes})
});


//Register New Property
app.post('/insert-new-property-request/', async(req, res) => {

  console.log(req.body)

  let serverRes = await InsertPersonalPropertyData(req.body)
  console.log(serverRes)

  res.send({serverRes})
});

//Extract Specifc Property
app.post('/extract-specific-property-request/', async(req, res) => {

  console.log(req.body)

  let serverRes = await extractSpecificProperty(req.body)
  console.log(serverRes)

  res.send({serverRes})
});






////////////////////////////////////////////////////////////////
app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'));
});

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
