//Call Lib
const request = require('request');
//Function Wrapping
exports.main = (event, callback) => {

  request('https://api.nasa.gov/planetary/apod?api_key=xfghuBsQqGyqaPu0dWrF4p9SF9WWfAvDYB26wf6C', function (error, response, body) {

    //Setup vars
    var title = JSON.parse(body).title;
    var date = JSON.parse(body).date;
    var exp = JSON.parse(body).explanation;

    //basic response
    const responseJson = {
      
      "botMessage": "Cool, So todays Picture is titled: " + title,
      "responseExpected": false
      
    }
    callback(responseJson);
      
  });
  
};

/* 	
  SAMPLE EVENT OBJECT
  What we send you

  {
    // userMessage is the message your visitor has sent to your bot.
    userMessage: {
      message: '200-300 Employees',
      quickReply: {
        quickReplies:[
          {
              value:'100-500',
              label:'100-500'
          }
        ]
      }
    },
    session: {
      // This is the visitorId.
      // If you collect an email, or if the visitor 
      // is already a contact, this will map to a contact id in HubSpot CRM.
      vid: 12345,
      // This contains all the properties your bot has collected at the moment.
      // For example, if you had collected a HubSpot contact property called FavoriteColor,
      // it would be listed here.
      properties: {
        CONTACT: {
          firstname: {
            value: 'John',
            syncedAt: 1534362540592
          }
        },
        COMPANY: {
          name: {
            value: 'HubSpot',
            syncedAt: 1534362540592
          }
        }
      }
    }
  }

  EXAMPLE RESULT OBJECTS
  What your code can return

  Example 1 : Send a message and goto another bot module.

  {
    // The message your bot will return.
    botMessage: 'Thanks for checking out our website {{ contact.firstname }}',
    // The next module your bot will go to. If nothing is provided,
    // we will select the next module in the bot path for you.
    nextModuleNickname: 'SuggestAwesomeProduct',
    // Whether or not this code snippet should be executed again with the next user input.
    responseExpected: false
  }

  Example 2 : Send a message from your code snippet THEN send response to question back into your snippet.

  {
    botMessage: 'Whats your favorite color?',
    responseExpected: true
  }
*/

