var selfPhysicalNext = {
    name: "Physical Abuse",
    elements: [
        {
            type: "html",
            name: "Physical",
            html: "<h1> Physical Abuse <h1>"
        },
        {
            type: "radiogroup",
            name: "selfPhysicalNext1",

            title: "Has anyone locked you up in a room or home, or made you stay forcefully in bed or tell you that you are sick when you were healthy ?",
            isRequired: true,
            choices: [
                {
                    value: "1",
                    text: "Yes"
                },
                {
                    value: "0",
                    text: "No"
                }
            ],
            colCount: 2
        },
        {
            type: "radiogroup",
            name: "selfPhysicalNext2",
            title: "Have you found yourself with unexpected bruises, lacerations or other evidence of hits or punches?",
            isRequired: true,
            choices: [
                {
                    value: "1",
                    text: "Yes"
                },
                {
                    value: "0",
                    text: "No"
                }
            ],
            colCount: 2
        }, {
            type: "radiogroup",
            name: "selfPhysicalNext3",
            title: "Have you ever been forced to overuse or misuse any medications?",
            isRequired: true,
            choices: [
                {
                    value: "1",
                    text: "Yes"
                },
                {
                    value: "0",
                    text: "No"
                }
            ],
            colCount: 2
        }
    ]
};

var otherPhysicalNext = {
    name: "Physical Abuse",
    elements: [
        {
            type: "html",
            name: "Physical",
            html: "<h1> Physical Abuse <h1>"
        },
        {
            type: "radiogroup",
            name: "otherPhysicalNext1",

            title: "Has anyone locked the person up in a room or home, or made him/her stay forcefully in bed or told that he/she is sick when he/she was healthy ?",
            isRequired: true,
            choices: [
                {
                    value: "1",
                    text: "Yes"
                },
                {
                    value: "0",
                    text: "No"
                }
            ],
            colCount: 2
        },
        {
            type: "radiogroup",
            name: "otherPhysicalNext2",
            title: "Have you found the peson with unexpected bruises, lacerations or other evidence of hits or punches?",
            isRequired: true,
            choices: [
                {
                    value: "1",
                    text: "Yes"
                },
                {
                    value: "0",
                    text: "No"
                }
            ],
            colCount: 2
        }, {
            type: "radiogroup",
            name: "otherPhysicalNext3",
            title: "Has the person ever been forced to overuse or misuse any medications?",
            isRequired: true,
            choices: [
                {
                    value: "1",
                    text: "Yes"
                },
                {
                    value: "0",
                    text: "No"
                }
            ],
            colCount: 2
        }
    ]
};

var selfFinancialNext = {
    name: "Financial Abuse",
    elements: [
        {
            type: "html",
            name: "Financial",
            html: "<h1> Financial Abuse <h1>"
        },
        {
            type: "radiogroup",
            name: "selfFinancialNext1",

            title: "Do you suspect anyone of stealing your possessions or money from your property?",
            isRequired: true,
            choices: [
                {
                    value: "1",
                    text: "Yes"
                },
                {
                    value: "0",
                    text: "No"
                }
            ],
            colCount: 2
        },
        {
            type: "radiogroup",
            name: "selfFinancialNext2",
            title: "Do you suspect someone of taking control of your finances against your wishes and denying access to your own money?",
            isRequired: true,
            choices: [
                {
                    value: "1",
                    text: "Yes"
                },
                {
                    value: "0",
                    text: "No"
                }
            ],
            colCount: 2
        }, {
            type: "radiogroup",
            name: "selfFinancialNext3",
            title: "Have you ever been threatened, coerced or influenced to change your Will or sign documents relating to your assets?",
            isRequired: true,
            choices: [
                {
                    value: "1",
                    text: "Yes"
                },
                {
                    value: "0",
                    text: "No"
                }
            ],
            colCount: 2
        }
    ]
};

var otherFinancialNext = {
    name: "Financial Abuse",
    elements: [
        {
            type: "html",
            name: "Financial",
            html: "<h1> Financial Abuse <h1>"
        },
        {
            type: "radiogroup",
            name: "otherFinancialNext1",

            title: "Do you suspect anyone of stealing the person's possessions or money from his/her property?",
            isRequired: true,
            choices: [
                {
                    value: "1",
                    text: "Yes"
                },
                {
                    value: "0",
                    text: "No"
                }
            ],
            colCount: 2
        },
        {
            type: "radiogroup",
            name: "otherFinancialNext2",
            title: "Do you suspect someone of taking control of the person's finances against his/her wishes and denying access to his/her own money?",
            isRequired: true,
            choices: [
                {
                    value: "1",
                    text: "Yes"
                },
                {
                    value: "0",
                    text: "No"
                }
            ],
            colCount: 2
        }, {
            type: "radiogroup",
            name: "otherFinancialNext3",
            title: "Has the person been threatened, coerced or influenced to change his/her Will or sign documents relating to his/her assets?",
            isRequired: true,
            choices: [
                {
                    value: "1",
                    text: "Yes"
                },
                {
                    value: "0",
                    text: "No"
                }
            ],
            colCount: 2
        }
    ]
};

var selfEmotionalNext = {
    name: "Emotional Abuse",
    elements: [
        {
            type: "html",
            name: "Emotional",
            html: "<h1>Emotional Abuse <h1>"
        },
        {
            type: "radiogroup",
            name: "selfEmotionalNext1",

            title: "Have you ever been forced to travel far away from family or friends or otherwise socially isolating you?",
            isRequired: true,
            choices: [
                {
                    value: "1",
                    text: "Yes"
                },
                {
                    value: "0",
                    text: "No"
                }
            ],
            colCount: 2
        },
        {
            type: "radiogroup",
            name: "selfEmotionalNext2",
            title: "Has anyone misused the function of Enduring Guardianship to force you to do something?",
            isRequired: true,
            choices: [
                {
                    value: "1",
                    text: "Yes"
                },
                {
                    value: "0",
                    text: "No"
                }
            ],
            colCount: 2
        }, {
            type: "radiogroup",
            name: "selfEmotionalNext3",
            title: "Have you ever felt a lack of privacy at home?",
            isRequired: true,
            choices: [
                {
                    value: "1",
                    text: "Yes"
                },
                {
                    value: "0",
                    text: "No"
                }
            ],
            colCount: 2
        }
    ]
};

var otherEmotionalNext = {
    name: "Emotional Abuse",
    elements: [
        {
            type: "html",
            name: "Emotional",
            html: "<h1>Emotional Abuse <h1>"
        },
        {
            type: "radiogroup",
            name: "otherEmotionalNext1",

            title: "Has the person ever been forced to travel far away from family or friends or otherwise socially isolating him/her?",
            isRequired: true,
            choices: [
                {
                    value: "1",
                    text: "Yes"
                },
                {
                    value: "0",
                    text: "No"
                }
            ],
            colCount: 2
        },
        {
            type: "radiogroup",
            name: "otherEmotionalNext2",
            title: "Has anyone misused the function of Enduring Guardianship to force him/her to do something?",
            isRequired: true,
            choices: [
                {
                    value: "1",
                    text: "Yes"
                },
                {
                    value: "0",
                    text: "No"
                }
            ],
            colCount: 2
        }, {
            type: "radiogroup",
            name: "otherEmotionalNext3",
            title: "Has the person ever felt a lack of privacy at his/her home?",
            isRequired: true,
            choices: [
                {
                    value: "1",
                    text: "Yes"
                },
                {
                    value: "0",
                    text: "No"
                }
            ],
            colCount: 2
        }
    ]
};

var selfSexualNext = {
    name: "Sexual Abuse",
    elements: [
        {
            type: "html",
            name: "Sexual",
            html: "<h1>Sexual Abuse <h1>"
        },
        {
            type: "radiogroup",
            name: "selfSexualNext1",

            title: "Has anyone cleaned or treated your genital area roughly or inappropriately?",
            isRequired: true,
            choices: [
                {
                    value: "1",
                    text: "Yes"
                },
                {
                    value: "0",
                    text: "No"
                }
            ],
            colCount: 2
        },
        {
            type: "radiogroup",
            name: "selfSexualNext2",
            title: "Have you experienced sexual harassment recently, by words or by behaviour?",
            isRequired: true,
            choices: [
                {
                    value: "1",
                    text: "Yes"
                },
                {
                    value: "0",
                    text: "No"
                }
            ],
            colCount: 2
        }
    ]
};

var otherSexualNext = {
    name: "Sexual Abuse",
    elements: [
        {
            type: "html",
            name: "Sexual",
            html: "<h1>Sexual Abuse <h1>"
        },
        {
            type: "radiogroup",
            name: "otherSexualNext1",

            title: "Has anyone cleaned or treated the person's genital area roughly or inappropriately?",
            isRequired: true,
            choices: [
                {
                    value: "1",
                    text: "Yes"
                },
                {
                    value: "0",
                    text: "No"
                }
            ],
            colCount: 2
        },
        {
            type: "radiogroup",
            name: "otherSexualNext2",
            title: "Has the person experienced sexual harassment recently, by words or by behaviour?",
            isRequired: true,
            choices: [
                {
                    value: "1",
                    text: "Yes"
                },
                {
                    value: "0",
                    text: "No"
                }
            ],
            colCount: 2
        }
    ]
};

var selfNeglectNext = {
    name: "Neglect",
    elements: [
        {
            type: "html",
            name: "Neglect",
            html: "<h1>Neglect<h1>"
        },
        {
            type: "radiogroup",
            name: "selfNeglectNext1",

            title: "Have you recently experienced unexplained weight loss; dehydration; or malnutrition?",
            isRequired: true,
            choices: [
                {
                    value: "1",
                    text: "Yes"
                },
                {
                    value: "0",
                    text: "No"
                }
            ],
            colCount: 2
        },
        {
            type: "radiogroup",
            name: "selfNeglectNext2",
            title: "Has anyone prevented you from getting food, clothing, glasses, hearing aids, or stopped you from being with people you wanted to be with?",
            isRequired: true,
            choices: [
                {
                    value: "1",
                    text: "Yes"
                },
                {
                    value: "0",
                    text: "No"
                }
            ],
            colCount: 2
        }, {
            type: "radiogroup",
            name: "selfNeglectNext3",
            title: "Does anyone give you overly attentive care like the “hovering carer”?",
            isRequired: true,
            choices: [
                {
                    value: "1",
                    text: "Yes"
                },
                {
                    value: "0",
                    text: "No"
                }
            ],
            colCount: 2
        }
    ]
};

var otherNeglectNext = {
    name: "Neglect",
    elements: [
        {
            type: "html",
            name: "Neglect",
            html: "<h1>Neglect<h1>"
        },
        {
            type: "radiogroup",
            name: "otherNeglectNext1",

            title: "Has the person recently experienced unexplained weight loss; dehydration; or malnutrition?",
            isRequired: true,
            choices: [
                {
                    value: "1",
                    text: "Yes"
                },
                {
                    value: "0",
                    text: "No"
                }
            ],
            colCount: 2
        },
        {
            type: "radiogroup",
            name: "otherNeglectNext2",
            title: "Has anyone prevented the person from getting food, clothing, glasses, hearing aids, or stopped him/her from being with people he/she wanted to be with?",
            isRequired: true,
            choices: [
                {
                    value: "1",
                    text: "Yes"
                },
                {
                    value: "0",
                    text: "No"
                }
            ],
            colCount: 2
        }, {
            type: "radiogroup",
            name: "otherNeglectNext3",
            title: "Does anyone give the person overly attentive care like the “hovering carer”?",
            isRequired: true,
            choices: [
                {
                    value: "1",
                    text: "Yes"
                },
                {
                    value: "0",
                    text: "No"
                }
            ],
            colCount: 2
        }
    ]
};

var nextJSON = {
    completedHtml: "<h1> Abused or not ? </h1>\n\n",
    pages: [],
    showQuestionNumbers: "off",
    showProgressBar: "top"
};


function sendDataToServer(survey) {
    //send Ajax request to your web server.
    alert("The results are:" + JSON.stringify(survey.data));
}

var abuseListNext=JSON.parse(localStorage.getItem('abuseListNext'));
for (var i = 0; i < abuseListNext.length; i++) {
    if (abuseListNext[i] == 'selfPhysical') 
        nextJSON.pages.push(selfPhysicalNext);
    
    else if (abuseListNext[i] =='selfFinancial')
        nextJSON.pages.push(selfFinancialNext);
    
    else if (abuseListNext[i] =='selfEmotional') 
        nextJSON.pages.push(selfEmotionalNext);
    
    else if (abuseListNext[i] =='selfSexual') 
        nextJSON.pages.push(selfSexualNext);
    
    else if (abuseListNext[i] =='selfNeglect') 
        nextJSON.pages.push(selfNeglectNext);
    
    else if (abuseListNext[i] == 'otherPhysical') 
        nextJSON.pages.push(otherPhysicalNext);
    
    else if (abuseListNext[i] == 'otherFinancial') 
        nextJSON.pages.push(otherFinancialNext);
    
    else if (abuseListNext[i] == 'otherEmotional') 
        nextJSON.pages.push(otherEmotionalNext);
    
    else if (abuseListNext[i] == 'otherSexual') 
        nextJSON.pages.push(otherSexualNext);
    
    else if (abuseListNext[i] == 'otherNeglect') 
        nextJSON.pages.push(otherNeglectNext);
    
}


var abuseList = JSON.parse(localStorage.getItem('abuseList'));


var survey = new Survey.Model(nextJSON);
new Vue({ el: '#surveyContainer', data: { survey: survey } });

survey
    .onComplete
    .add(function (result) {
        var nextAbuseList = [];
        var nextAbuseListLow = [];

        if (result.data.selfPhysicalNext1 == 0 && result.data.selfPhysicalNext2 == 0 && result.data.selfPhysicalNext3 == 0 && result.data.selfFinancialNext1 == 0 && result.data.selfFinancialNext2 == 0 && result.data.selfFinancialNext3 == 0 && result.data.selfEmotionalNext1 == 0 && result.data.selfEmotionalNext2 == 0 && result.data.selfEmotionalNext3 == 0 && result.data.selfSexualNext1 == 0 && result.data.selfSexualNext2 == 0 && result.data.selfNeglectNext1 == 0 && result.data.selfNeglectNext2 == 0 && result.data.selfNeglectNext3 == 0) {
            document
                .querySelector('#surveyResultNext')
                .innerHTML = "There is a high likelihood that you have not been abused";
        }

        if (result.data.otherPhysicalNext1 == 0 && result.data.otherPhysicalNext2 == 0 && result.data.otherPhysicalNext3 == 0 && result.data.otherFinancialNext1 == 0 && result.data.otherFinancialNext2 == 0 && result.data.otherFinancialNext3 == 0 && result.data.otherEmotionalNext1 == 0 && result.data.otherEmotionalNext2 == 0 && result.data.otherEmotionalNext3 == 0 && result.data.otherSexualNext1 == 0 && result.data.otherSexualNext2 == 0 && result.data.otherNeglectNext1 == 0 && result.data.otherNeglectNext2 == 0 && result.data.otherNeglectNext3 == 0) {
            document
                .querySelector('#surveyResultNext')
                .innerHTML = "There is a high likelihood that the person has not been abused";
        }

        //Set List of abuses involved with links
        var d = "/Information/Index";        
        if ((parseInt(result.data.selfPhysicalNext1, 10) + parseInt(result.data.selfPhysicalNext2, 10) + parseInt(result.data.selfPhysicalNext3, 10)) >=2) {
            nextAbuseList.push('<a href="/Solutions/Physical" target="_blank">Physical Abuse</a>');
        }
        else if ((parseInt(result.data.selfPhysicalNext1, 10) + parseInt(result.data.selfPhysicalNext2, 10) + parseInt(result.data.selfPhysicalNext3, 10)) == 1) {
            nextAbuseListLow.push('<a href="/Solutions/Physical" target="_blank">Physical Abuse</a>');
        }
        if ((parseInt(result.data.selfFinancialNext1, 10) + parseInt(result.data.selfFinancialNext2, 10) + parseInt(result.data.selfFinancialNext3, 10)) >= 2) {
            nextAbuseList.push('<a href="/Solutions/Financial" target="_blank">Financial Abuse</a>')
        }
        else if ((parseInt(result.data.selfFinancialNext1, 10) + parseInt(result.data.selfFinancialNext2, 10) + parseInt(result.data.selfFinancialNext3, 10)) == 1) {
            nextAbuseListLow.push('<a href="/Solutions/Financial" target="_blank">Financial Abuse</a>')
        }
        if ((parseInt(result.data.selfEmotionalNext1, 10) + parseInt(result.data.selfEmotionalNext2, 10) + parseInt(result.data.selfEmotionalNext3, 10)) >= 2) {
            nextAbuseList.push('<a href="/Solutions/Emotional" target="_blank">Emotional Abuse</a>')
        }
        else if ((parseInt(result.data.selfEmotionalNext1, 10) + parseInt(result.data.selfEmotionalNext2, 10) + parseInt(result.data.selfEmotionalNext3, 10)) == 1) {
            nextAbuseListLow.push('<a href="/Solutions/Emotional" target="_blank">Emotional Abuse</a>')
        }
        if ((parseInt(result.data.selfSexualNext1, 10) + parseInt(result.data.selfSexualNext2, 10)) >= 1) {
            nextAbuseList.push('<a href="/Solutions/Sexual" target="_blank">Sexual Abuse</a>')
        }        
        if ((parseInt(result.data.selfNeglectNext1, 10) + parseInt(result.data.selfNeglectNext2, 10) + parseInt(result.data.selfNeglectNext3, 10)) >= 2) {
            nextAbuseList.push('<a href="/Solutions/Neglect" target="_blank">Neglect</a>')
        }
        else if ((parseInt(result.data.selfNeglectNext1, 10) + parseInt(result.data.selfNeglectNext2, 10) + parseInt(result.data.selfNeglectNext3, 10)) == 1) {
            nextAbuseListLow.push('<a href="/Solutions/Neglect" target="_blank">Neglect</a>')
        }


        if ((parseInt(result.data.otherPhysicalNext1, 10) + parseInt(result.data.otherPhysicalNext2, 10) + parseInt(result.data.otherPhysicalNext3, 10)) >= 2) {
            nextAbuseList.push('<a href="/Solutions/Physical" target="_blank">Physical Abuse</a>');
        }
        else if ((parseInt(result.data.otherPhysicalNext1, 10) + parseInt(result.data.otherPhysicalNext2, 10) + parseInt(result.data.otherPhysicalNext3, 10)) == 1) {
            nextAbuseListLow.push('<a href="/Solutions/Physical" target="_blank">Physical Abuse</a>');
        }
        if ((parseInt(result.data.otherFinancialNext1, 10) + parseInt(result.data.otherFinancialNext2, 10) + parseInt(result.data.otherFinancialNext3, 10)) >= 2) {
            nextAbuseList.push('<a href="/Solutions/Financial" target="_blank">Financial Abuse</a>')
        }
        else if ((parseInt(result.data.otherFinancialNext1, 10) + parseInt(result.data.otherFinancialNext2, 10) + parseInt(result.data.otherFinancialNext3, 10)) == 1) {
            nextAbuseListLow.push('<a href="/Solutions/Financial" target="_blank">Financial Abuse</a>')
        }
        if ((parseInt(result.data.otherEmotionalNext1, 10) + parseInt(result.data.otherEmotionalNext2, 10) + parseInt(result.data.otherEmotionalNext3, 10)) >= 2) {
            nextAbuseList.push('<a href="/Solutions/Emotional" target="_blank">Emotional Abuse</a>')
        }
        else if ((parseInt(result.data.otherEmotionalNext1, 10) + parseInt(result.data.otherEmotionalNext2, 10) + parseInt(result.data.otherEmotionalNext3, 10)) == 1) {
            nextAbuseListLow.push('<a href="/Solutions/Emotional" target="_blank">Emotional Abuse</a>')
        }
        if ((parseInt(result.data.otherSexualNext1, 10) + parseInt(result.data.otherSexualNext2, 10)) >= 1) {
            nextAbuseList.push('<a href="/Solutions/Sexual" target="_blank">Sexual Abuse</a>')
        }
        if ((parseInt(result.data.otherNeglectNext1, 10) + parseInt(result.data.otherNeglectNext2, 10) + parseInt(result.data.otherNeglectNext3, 10)) >= 2) {
            nextAbuseList.push('<a href="/Solutions/Neglect" target="_blank">Neglect</a>')
        }
        else if ((parseInt(result.data.otherNeglectNext1, 10) + parseInt(result.data.otherNeglectNext2, 10) + parseInt(result.data.otherNeglectNext3, 10)) == 1) {
            nextAbuseListLow.push('<a href="/Solutions/Neglect" target="_blank">Neglect</a>')
        }


        //if there are abuses wih points greater than 2
        if (nextAbuseList.length > 0) {
            document
                .querySelector('#surveyResultNext')
                .innerHTML = "There is a high likelihood for the below abuses to have happened - ";
            var abusehtml = '';
            for (var i in nextAbuseList) {
                abusehtml += nextAbuseList[i] + '<br />';
            }
            abusehtml += '<br />'

            document
                .querySelector('#surveyResultAbuseNext')
                .innerHTML += abusehtml;

        }
        //IF THERE  are no other abuses. will print the previous list
        else if (nextAbuseList.length == 0) {
            if (abuseList.length > 0) {
                document
                    .querySelector('#surveyResultNext')
                    .innerHTML = "There are no high likelihood of anymore abuses other than the ones previously stated which are - ";
                var abusehtml = '';
                for (var i in abuseList) {
                    abusehtml += abuseList[i] + '<br />';
                }
                abusehtml += '<br />'

                document
                    .querySelector('#surveyResultAbuseNext')
                    .innerHTML += abusehtml;
            }
            else {
                document
                    .querySelector('#surveyResultNext')
                    .innerHTML = "There is no likelihood of any other abuses happening. ";                              
            }
        }

            //if there are abuses with points less than 2 are less likelihood

            if (nextAbuseListLow.length > 0) {
                document
                    .querySelector('#surveyResultNextLow')
                    .innerHTML = "There is also a low likelihood for the below abuses to have happened - ";
                var abusehtmllow = '';
                for (var i in nextAbuseListLow) {
                    abusehtmllow += nextAbuseListLow[i] + '<br />';
                }
                abusehtmllow += '<br />'

                document
                    .querySelector('#surveyResultAbuseNextLow')
                    .innerHTML += abusehtmllow;

            }


            var infobuttin = 'Click on any of the above abuses for further information on each of them';

            document
                .querySelector('#infobuttonNext')
                .innerHTML += infobuttin;
    });