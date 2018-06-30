const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');

class Mailer extends helper.Mail {
constructor({ email }, content) {
  super();

  this.from_email = new helper.Email('foodpep@foodpep.com');
  this.name = new helper.Content('text/html',content);
  this.address = new helper.Content('text/html',content);
  this.phoneno = new helper.Content('text/html',content);
  this.email = this.formatAddresses(email);
  this.addContent(this.name);
  this.addContent(this.address);
  this.addContent(this.phoneno);
  this.addClickTracking();
  this.addEmail();
}
formatAddresses(email) {
  return email.map(({ email }) => {
    return new Helper.Email(email);
  });
}
addClickTracking() {
  const trackingSettings = new helper.TrackingSettings();
  const clickTracking = new helper.clickTracking(true,true);
  trackingSettings.setClickTracking(clickTracking);
  this.addTrackingSettings(trackingSettings);
}

addEmail(){
  const personalize = new helper.Personalization();
  this.email.forEach(email => {
    personalize.addTo(email);
  });
  this.addPersonalization(personalize);
}



}

module.exports = Mailer;
