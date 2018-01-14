import mongoosefrom 'mongoose';
import config from '../config';

export default callback => {
  let db = mongoose.connect(config.mongoUrl);
  callback(db);
}
