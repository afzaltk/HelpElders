//Survey
//    .StylesManager
//    .applyTheme("default");

var surveyJSON = {
    completedHtml: "<h1> Abused or not ? </h1>\n\n",
    pages: [
        {
            name: "Index",
            elements: [
                {
                    type: "html",
                    name: "Heading",
                    html: " <h1 class='intro__heading intro__heading--quiz title'>                     Elder Abuse Questionnaire              </h1> "
                },
                {
                    type: "html",
                    name: "bodycontent",
                    html: "<div style='font-size:20px' class='intro__body wysiwyg'>       <p>In this section, you will be asked about yourself or some elder that you know, on different scenarios of Elder Abuse.</p>       <p>You will be asked regarding the following types of Elder Abuse:</p>       <ul>        <li>        Physical Abuse        </li>        <li>        Financial Abuse      </li>        <li>        Emotional Abuse        </li><li>        Sexual Abuse        </li><li>        Neglect        </li>       </ul>         </div>"
                }
            ]
        },
        {
            name: "Main",
            elements: [
                {
                    type: "radiogroup",
                    name: "age",
                    title: "Are you above 60 years old ?",
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
                    name: "whom",
                    title: "Whom are you assessing with this Questionnaire?",
                    isRequired: true,
                    choices: [
                        {
                            value: "1",
                            text: "Myself"
                        },
                        {
                            value: "0",
                            text: "Another Elder I know"
                        }
                    ],
                    colCount: 2
                }
            ]
        },
        {
            name: "Physical Abuse",
            elements: [
                {
                    type: "html",
                    name: "Physical",
                    html: "<h1> Physical Abuse <h1>"
                },
                {
                    type: "radiogroup",
                    name: "selfPhysical1",
                    visibleIf: "{whom} = \"1\"",
                    title: "Has anyone close to you tried to hurt or harm you recently?",
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
                    name: "selfPhysical2",
                    visibleIf: "{whom} = \"1\"",
                    title: "Do you feel unsafe where you live?",
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
                    name: "otherPhysical1",
                    visibleIf: "{whom} = \"0\"",
                    title: "Has anyone close to this concerned person tried to hurt or harm that persont recently?",
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
                    name: "otherPhysical2",
                    visibleIf: "{whom} = \"0\"",
                    title: "Does the concerned person feel unsafe where he/she lives?",
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
        },
        {
            name: "Financial Abuse",
            elements: [
                {
                    type: "html",
                    name: "financial",
                    html: "<h1> Financial Abuse <h1>"
                },
                {
                    type: "radiogroup",
                    name: "selffinancial1",
                    visibleIf: "{whom} = \"1\"",
                    title: "Have you signed any documents that you did not read or understand?",
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
                    name: "selffinancial2",
                    visibleIf: "{whom} = \"1\"",
                    title: "Has anyone taken any of your belongings without your consent ?",
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
                    name: "otherfinancial1",
                    visibleIf: "{whom} = \"0\"",
                    title: "Has the person signed any documents that he/she did not read or understand?",
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
                    name: "otherfinancial2",
                    visibleIf: "{whom} = \"0\"",
                    title: "Has anyone taken any of his/her belongings without his/her consent ?",
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
        },
        {
            name: "Emotional Abuse",
            elements: [
                {
                    type: "html",
                    name: "emotional",
                    html: "<h1> Emotional Abuse <h1>"
                },
                {
                    type: "radiogroup",
                    name: "selfEmotional1",
                    visibleIf: "{whom} = \"1\"",
                    title: "Do you live alone or ever felt socially isolated?",
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
                    name: "selfEmotional2",
                    visibleIf: "{whom} = \"1\"",
                    title: "Have you been upset because someone talked to you in a way that made you feel ashamed or threatened?",
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
                    name: "otherEmotional1",
                    visibleIf: "{whom} = \"0\"",
                    title: "Does the person live alone or has the person ever felt socially isolated?",
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
                    name: "otherEmotional2",
                    visibleIf: "{whom} = \"0\"",
                    title: "Has the person been upset because someone talked to him/her in a way that made him/her feel ashamed or threatened?",
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
        },
        {
            name: "Sexual Abuse",
            elements: [
                {
                    type: "html",
                    name: "sexual",
                    html: "<h1> Sexual Abuse <h1>"
                },
                {
                    type: "radiogroup",
                    name: "selfSexual1",
                    visibleIf: "{whom} = \"1\"",
                    title: "Has anyone touched you in ways that you did not want ?",
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
                    name: "selfSexual2",
                    visibleIf: "{whom} = \"1\"",
                    title: "Has anyone made you feel uncomfortable about your body or gender ?",
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
                    name: "otherSexual1",
                    visibleIf: "{whom} = \"0\"",
                    title: "Do you think anyone has touched the person in ways that the person did not want ?",
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
                    name: "otherSexual2",
                    visibleIf: "{whom} = \"0\"",
                    title: "Do you think anyone has made the person feel uncomfortable about his/her body or gender ?",
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
        },
        {
            name: "Neglect",
            elements: [
                {
                    type: "html",
                    name: "Neglect",
                    html: "<h1> Neglect <h1>"
                },
                {
                    type: "radiogroup",
                    name: "selfNeglect1",
                    visibleIf: "{whom} = \"1\"",
                    title: "Do you feel you are not being taken care of at home or at an aged care home?",
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
                    name: "selfNeglect2",
                    visibleIf: "{whom} = \"1\"",
                    title: "Has anyone prevented you from getting medication or medical care ?",
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
                    name: "otherNeglect1",
                    visibleIf: "{whom} = \"0\"",
                    title: "Does the person feel he/she is not being taken care of at home or at an aged care home?",
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
                    name: "otherNeglect2",
                    visibleIf: "{whom} = \"0\"",
                    title: "Has anyone prevented the person from getting medication or medical care?",
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
        },
        {
            name: "page1",
            elements: [
                {
                    type: "text",
                    name: "Postcode",
                    title: "Kindly type your Post code below",
                    commentText: "Eg:-3100",
                    valueName: "Eg - 3001",
                    isRequired: true,
                    requiredErrorText: "Invalid Post Code",
                    validators: [
                        {
                            type: "numeric",
                            text: "Invalid Post code",
                            minValue: 3000,
                            maxValue: 4000
                        }
                    ],
                    inputType: "number",
                    size: 4,
                    maxLength: 4
                }
            ]
        }
    ],
    showQuestionNumbers: "off",
    showProgressBar: "top"
};


function sendDataToServer(survey) {
    //send Ajax request to your web server.
    alert("The results are:" + JSON.stringify(survey.data));
}

var survey = new Survey.Model(surveyJSON);
new Vue({ el: '#surveyContainer', data: { survey: survey } });


survey
    .onComplete
    .add(function (result) {
        var abuseList = [];
        var abuseListNext = [];

        //Self Case
        if (result.data.whom == 1)
        {

           //not abused
            if (result.data.selfPhysical1 == 0 && result.data.selfPhysical2 == 0 && result.data.selffinancial1 == 0 && result.data.selffinancial2 == 0 && result.data.selfEmotional1 == 0 && result.data.selfEmotional2 == 0 && result.data.selfSexual1 == 0 && result.data.selfSexual2 == 0 && result.data.selfNeglect1 == 0 && result.data.selfNeglect2 == 0)
            {
                document
                    .querySelector('#surveyResult')
                    .innerHTML = "There is a high likelihood that you have not been abused";
            }

            //Set List of abuses involved
            var d = "/Information/Index";
            if (result.data.selfPhysical1 == 1 && result.data.selfPhysical2 == 1) {
                abuseList.push('<a href="' + d + '" target="_blank">Physical Abuse</a>');
            }
            if (result.data.selffinancial1 == 1 && result.data.selffinancial2 == 1) {
                abuseList.push('<a href="' + d + '" target="_blank">Financial Abuse</a>')
            }
            if (result.data.selfEmotional1 == 1 && result.data.selfEmotional2 == 1) {
                abuseList.push('<a href="' + d + '" target="_blank">Emotional Abuse</a>')
            }
            if (result.data.selfSexual1 == 1 && result.data.selfSexual2 == 1) {
                abuseList.push('<a href="' + d + '" target="_blank">Sexual Abuse</a>')
            }
            if (result.data.selfNeglect1 == 1 && result.data.selfNeglect2 == 1) {
                abuseList.push('<a href="' + d + '" target="_blank">Neglect</a>')
            }

            if ((result.data.selfPhysical1 == 0 && result.data.selfPhysical2 == 1) || (result.data.selfPhysical1 == 1 && result.data.selfPhysical2 == 0)) {
                abuseListNext.push('selfPhysical');
            }
            if ((result.data.selffinancial1 == 0 && result.data.selffinancial2 == 1) || (result.data.selffinancial1 == 1 && result.data.selffinancial2 == 0)) {
                abuseListNext.push('selfFinancial');
            }
            if ((result.data.selfEmotional1 == 0 && result.data.selfEmotional2 == 1) || (result.data.selfEmotional1 == 1 && result.data.selfEmotional2 == 0)) {
                abuseListNext.push('selfEmotional');
            }
            if ((result.data.selfSexual1 == 0 && result.data.selfSexual2 == 1) || (result.data.selfSexual1 == 1 && result.data.selfSexual2 == 0)) {
                abuseListNext.push('selfSexual');
            }
            if ((result.data.selfNeglect1 == 0 && result.data.selfNeglect2 == 1) || (result.data.selfNeglect1 == 1 && result.data.selfNeglect2 == 0)) {
                abuseListNext.push('selfNeglect');
            }

            localStorage.setItem('abuseListNext', JSON.stringify(abuseListNext));
            localStorage.setItem('abuseList', JSON.stringify(abuseList));


            //Print the corresponding abuses
            if (abuseList.length > 0) {
                document
                    .querySelector('#surveyResult')
                    .innerHTML = "There is a high likelihood that you have been exposed to the following types of Abuses - ";
                var abusehtml = '';
                for (var i in abuseList) {
                    abusehtml += abuseList[i] + '<br />';
                }
                abusehtml += '<br />'

                document
                    .querySelector('#surveyResultAbuse')
                    .innerHTML += abusehtml;


                var infobuttin = 'Click on any of the above abuses for further information on each of them';

                document
                    .querySelector('#infobutton')
                    .innerHTML += infobuttin;

                if (abuseListNext.length > 0) {

                var nextSurvey = 'Kindly <a href="/Responses/Index">Click here</a> to go further assess yourself';

                document
                    .querySelector('#NextSurvey')
                        .innerHTML += nextSurvey;
                }
            }

        }

        //Other case
        else if (result.data.whom == 0) {

            //Not abused
            if (result.data.otherPhysical1 == 0 && result.data.otherPhysical2 == 0 && result.data.otherfinancial1 == 0 && result.data.otherfinancial2 == 0 && result.data.otherEmotional1 == 0 && result.data.otherEmotional2 == 0 && result.data.otherSexual1 == 0 && result.data.otherSexual2 == 0 && result.data.otherNeglect1 == 0 && result.data.otherNeglect2 == 0) {
                document
                    .querySelector('#surveyResult')
                    .innerHTML = "There is a high likelihood that the person concerned has not been abused";
            }

            //Set List of abuses involved
            
            var d = "/Information/Index";
            if (result.data.otherPhysical1 == 1 && result.data.otherPhysical2 == 1) {
                abuseList.push('<a href="' + d +'" target="_blank">Physical Abuse</a>');
            }   
            if (result.data.otherfinancial1 == 1 && result.data.otherfinancial2 == 1) {
                abuseList.push('<a href="' + d +'" target="_blank">Financial Abuse</a>')
            }
            if (result.data.otherEmotional1 == 1 && result.data.otherEmotional2 == 1) {
                abuseList.push('<a href="' + d + '" target="_blank">Emotional Abuse</a>')
            }
            if (result.data.otherSexual1 == 1 && result.data.otherSexual2 == 1) {
                abuseList.push('<a href="' + d + '" target="_blank">Sexual Abuse</a>')
            }
            if (result.data.otherNeglect1 == 1 && result.data.otherNeglect2 == 1) {
                abuseList.push('<a href="' + d + '" target="_blank">Neglect</a>')
            }
            if ((result.data.otherPhysical1 == 0 && result.data.otherPhysical2 == 1) || (result.data.otherPhysical1 == 1 && result.data.otherPhysical2 == 0)) {
                abuseListNext.push('otherPhysical');
            }
            if ((result.data.otherfinancial1 == 0 && result.data.otherfinancial2 == 1) || (result.data.otherfinancial1 == 1 && result.data.otherfinancial2 == 0)) {
                abuseListNext.push('otherFinancial');
            }
            if ((result.data.otherEmotional1 == 0 && result.data.otherEmotional2 == 1) || (result.data.otherEmotional1 == 1 && result.data.otherEmotional2 == 0)) {
                abuseListNext.push('otherEmotional');
            }
            if ((result.data.otherSexual1 == 0 && result.data.otherSexual2 == 1) || (result.data.otherSexual1 == 1 && result.data.otherSexual2 == 0)) {
                abuseListNext.push('otherSexual');
            }
            if ((result.data.otherNeglect1 == 0 && result.data.otherNeglect2 == 1) || (result.data.otherNeglect1 == 1 && result.data.otherNeglect2 == 0)) {
                abuseListNext.push('otherNeglect');
            }

            localStorage.setItem('abuseListNext', JSON.stringify(abuseListNext));
            localStorage.setItem('abuseList', abuseList);

            //Print the corresponding abuses
            if (abuseList.length > 0) {
                document
                    .querySelector('#surveyResult')
                    .innerHTML = "There is a high likelihood that the person concerned has been exposed to the following types of Abuses - ";
                var abusehtml = '';
                for (var i in abuseList) {
                    abusehtml +=  abuseList[i] + '<br />';
                }
                abusehtml += '<br />'

                document
                    .querySelector('#surveyResultAbuse')
                    .innerHTML += abusehtml;

                
                var infobuttin = 'Click on any of the above abuses for further information on each of them';

                document
                    .querySelector('#infobutton')
                    .innerHTML += infobuttin;

                if (abuseListNext.length > 0) {

                var nextSurvey = 'Kindly <a href="/Responses/Index">Click here</a> to go further assess the person more';

                document
                    .querySelector('#NextSurvey')
                        .innerHTML += nextSurvey;
                }
            }


        }
    });

        //document
        //    .querySelector('#surveyResult')
        //        .innerHTML = "Yes you are Abused";