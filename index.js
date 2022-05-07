const GuardianApi = require('./guardianApi');
const ModelNews = require('./modelNews');
const ViewNews = require('./viewNews');
const model = new ModelNews();
const view = new ViewNews(model);
const api = new GuardianApi();

model.addNews('this is news'); //test data - delete when Api connected
model.addNews('this is a news as well'); //test data - delete when Api connected
view.displayNews();