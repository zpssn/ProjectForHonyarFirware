var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  res.render('index');
});
/* GET home page. */
var meter_sp10=
{ "code":200,
  "list":[
    {"version":"V10003",
    "date":"2016-5-27",
    "changelog":{"en":"1.Optimize the lamp control effect","zh_cn":"1.路由器加密，断电上电后，模块自动连接到路由器"},
    "path":"http://112.124.58.247/firmware/meter_sp10/10AV3.bin"}]
  }
  
  var meter_sp16=
{ "code":200,
  "list":[
    {"version":"V10003",
    "date":"2016-5-27",
    "changelog":{"en":"1.Optimize the lamp control effect","zh_cn":"1.路由器加密，断电上电后，模块自动连接到路由器"},
    //"path":"http://42.159.227.78/HONGYAN_3_SPMINI_PLUS_10A-10009-UPDATE-428.bin"
	}]
  }
  
  
var HY_spg10=
{ "code":200,
  "list":[
    {"version":"V10010",
    "date":"2016-5-27",
    "changelog":{"en":"1.Optimize the lamp control effect","zh_cn":"1.路由器加密，断电上电后，模块自动连接到路由器"},
    //"path":"http://42.159.227.78/HONGYAN_3_SPMINI_PLUS_10A-10009-UPDATE-428.bin"
	}]
  }
  
  /*var sp10=
{ "code":200,
  "list":[
    {"version":"V10000",
    "date":"2016-5-27",
    "changelog":{"en":"1.Optimize the lamp control effect","zh_cn":"1.路由器加密，断电上电后，模块自动连接到路由器"},
    //"path":"http://42.159.227.78/HONGYAN_3_SPMINI_PLUS_10A-10009-UPDATE-428.bin"
	}]
  }
  var sp16=
{ "code":200,
  "list":[
    {"version":"V10000",
    "date":"2016-5-27",
    "changelog":{"en":"1.Optimize the lamp control effect","zh_cn":"1.路由器加密，断电上电后，模块自动连接到路由器"},
    //"path":"http://42.159.227.78/HONGYAN_3_SPMINI_PLUS_10A-10009-UPDATE-428.bin"
	}]
  }*/
  var sp_II_10=
{ "code":200,
  "list":[
    {"version":"V10004",
    "date":"2016-5-27",
    "changelog":{"en":"1.Optimize the lamp control effect","zh_cn":"1.路由器加密，断电上电后，模块自动连接到路由器"},
    //"path":"http://42.159.227.78/HONGYAN_3_SPMINI_PLUS_10A-10009-UPDATE-428.bin"
	}]
  }
 var sp_II_16=
{ "code":200,
  "list":[
    {"version":"V10004",
    "date":"2016-5-27",
    "changelog":{"en":"1.Optimize the lamp control effect","zh_cn":"1.路由器加密，断电上电后，模块自动连接到路由器"},
    //"path":"http://42.159.227.78/HONGYAN_3_SPMINI_PLUS_10A-10009-UPDATE-428.bin"
	}]
  }
  
  var meter_ms4=
{ "code":200,
  "list":[
    {"version":"V10024",
    "date":"2016-5-27",
    "changelog":{"en":"1.Optimize the lamp control effect","zh_cn":"1.路由器加密，断电上电后，模块自动连接到路由器"},
   /* "path":"http://121.40.147.143/soft/hongyan/OEM-10024-UPDATE-340.bin"*/
   "path":"http://112.124.58.247/firmware/meter_ms4/OEM-10024-UPDATE-340.bin"
	}]
  }
  var ms4=
{ "code":200,
  "list":[
    {"version":"V10024",
    "date":"2016-5-27",
    "changelog":{"en":"1.Optimize the lamp control effect","zh_cn":"1.路由器加密，断电上电后，模块自动连接到路由器"},
   "path":"http://121.40.147.143/soft/hongyan/OEM-10024-UPDATE-340.bin"
	}]
  }
router.get('/version/meter_sp10', function(req, res, next) {
  res.send(meter_sp10);
});



router.get('/version/meter_sp16', function(req, res, next) {
  res.send(meter_sp16);
});


router.get('/version/HY_spg10', function(req, res, next) {
  res.send(HY_spg10);
});


router.get('/version/sp10', function(req, res, next) {
  res.send(sp10);
});

router.get('/version/sp16', function(req, res, next) {
  res.send(sp16);
});

router.get('/version/sp_II_10', function(req, res, next) {
  res.send(sp_II_10);
});

router.get('/version/sp_II_16', function(req, res, next) {
  res.send(sp_II_16);
});
router.get('/version/meter_ms4', function(req, res, next) {
  res.send(meter_ms4);
});

router.get('/version/ms4', function(req, res, next) {
  res.send(ms4);
});

router.get('/firmware/meter_sp10/10AV3.bin', function(req, res, next) {
  res.download('/SmartCtrlFirmwareUpdata/firmware/meter_sp10/10AV3.bin','10AV3.bin');
});

router.get('/firmware/meter_ms4/OEM-10024-UPDATE-340.bin', function(req, res, next) {
  res.download('/SmartCtrlFirmwareUpdata/firmware/meter_ms4/OEM-10024-UPDATE-340.bin','OEM-10024-UPDATE-340.bin');
});

module.exports = router;
