console.log("loading detail.js"),define(["marionette"],function(e){"use strict";return e.AppRouter.extend({appRoutes:{home:"home",analysis:"analysis","analysis/:id":"analysis","analysis/:subjectId/:dsId":"analysisAdd","analysis/:subjectId/:dsId/:bgId":"analysisAdd","":"home","homeList/:listName":"homeList",setting:"setting",document:"document","manage/:id/:reportType":"manage",graph:"graph","offLine/job/list":"offLine","offLine/:jobId/data/list":"offLineJob","offLine/:jobId":"offLineShow","offLine/job/:jobId/:jobDataId":"offLineDataShow"}})});