var SibApiV3Sdk = require('sib-api-v3-sdk');
var defaultClient = SibApiV3Sdk.ApiClient.instance;

var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = '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';

var apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

var sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail(); // SendSmtpEmail | Values to send a transactional email

const sendWelcomeEmail = (email, name) => {
    sendSmtpEmail = {
        to: [{
            email
        }],
        templateId: 2,
        params: {
            name: name,
            body: 'Welcome to task manager app! Let me know how you get along with the app.'
        },
        headers: {
            'X-Mailin-custom': 'custom_header_1:custom_value_1|custom_header_2:custom_value_2'
        }
    };
    
    apiInstance.sendTransacEmail(sendSmtpEmail).then(function(data) {
        console.log('API called successfully. Returned data: ' + data);
    }, function(error) {
        console.error(error);
    });
};
