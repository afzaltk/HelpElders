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
    var name = abuseListNext[i];
    if (name = 'selfPhysical') {
        nextJSON.pages.push(selfPhysicalNext);
    }
    if (name ='selfFinancial') {
        nextJSON.pages.push(selfFinancialNext);
    }
    if (name ='selfEmotional') {
        nextJSON.pages.push(selfEmotionalNext);
    }
    if (name ='selfSexual') {
        nextJSON.pages.push(selfSexualNext);
    }
    if (name ='selfNeglect') {
        nextJSON.pages.push(selfNeglectNext);
    }
}




var survey = new Survey.Model(nextJSON);
new Vue({ el: '#surveyContainer', data: { survey: survey } });

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResultNext')
            .innerHTML = "result: " + JSON.stringify(nextJSON);
    });