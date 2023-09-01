// password  - ZpnMrGA5uyspLnnn
// username - shrishti0301
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());
const fs = require('fs');
const uploadMiddleware = multer({ dest: 'uploads/' });
app.use('/uploads', express.static(__dirname + '/uploads'));
const PORT = 5000;

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

// var corsOptions = {
//   origin: 'http://localhost:3000/',
//   optionsSuccessStatus: 200,
// };

mongoose.connect(
  'mongodb+srv://shrishti0301:ZpnMrGA5uyspLnnn@cluster0.ad1gnwm.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Connected to MongoDB');
});

// app.post('/upload', (req, res) => {
//   upload(req, res, (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       const newImage = new ImageModel({
//         name: req.body.name,
//         image: {
//           data: fs.readFileSync('uploads/' + req.file.filename),
//           contentType: 'image/png',
//         },
//       });
//       newImage
//         .save()
//         .then(() => res.send('successfully uploaded'))
//         .catch((err) => console.log(err));
//     }
//   });
// });

// app.get('/', async (req, res) => {
//   const allData = await ImageModel.find();
//   res.json(allData);
// });

// const userSchema = new mongoose.Schema({
// 	name: { type: String, required: true },
// 	email: { type: String, required: true },
// 	password: { type: String, required: true },
// 	//token:{ type: String, required: true },
// });
// const User = mongoose.model("User", userSchema);

//upload code

//Multiple files
// app.post('/upload/multiple', uploadStorage.array('file', 10), (req, res) => {
//   console.log(req);
//   return res.send('Multiple files');
// });
app.post('/post', uploadMiddleware.single('file'), async (req, res) => {
  const { originalname, path } = req.file;

  const parts = originalname.split('.');
  const ext = parts[parts.length - 1];
  const newPath = path + '.' + ext;
  fs.renameSync(path, newPath);
  res.json('ok');
});
app.get('/post/:id', (req, res) => {
  const { id } = req.params;

  const postDoc = `${id}`;
  res.json(postDoc);
});
app.listen(4000, () => {
  console.log(`Server is running on 4000`);
});
