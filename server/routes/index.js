'use strict';
var router = require('express').Router();
var https = require('https');
var EventProxy = require('eventproxy');
var ep = new EventProxy();

// 查询 Todo 列表
router.get('/', function(req, res) {
    res.send('server start')
});

router.get('/tickerDatas', function(req, res) {
    var tickerUrlPath = 'https://www.okcoin.cn/api/v1/ticker.do?symbol=btc_cny'
    var kLineUrlPath = 'https://www.okcoin.cn/api/v1/kline.do?symbol=btc_cny&type=1day&size=1'
    https.get(tickerUrlPath, function(httpRes) {
        httpRes.on('data', function(data) {
            var dataObj = JSON.parse(data.toString('UTF-8'))
            var tickerObj = {
                date:Number.parseFloat(dataObj.date)*1000, 
                last:Number.parseFloat(dataObj.ticker.last)}

            ep.emit('gotTicker', tickerObj)
        })
    })
    https.get(kLineUrlPath, function(httpRes) {
        httpRes.on('data', function(data) {
            var dataObj = JSON.parse(data.toString('UTF-8'))
            var klineObj = {
                date : dataObj[0][0], 
                open : dataObj[0][1],
                high : dataObj[0][2],
                low  : dataObj[0][3],
                last : dataObj[0][4],
                vol  : dataObj[0][5]
            }

            ep.emit('gotKLine', klineObj)
        })
    })

    ep.all('gotTicker', 'gotKLine', function(tickerObj, klineObj) {
        var resObj = {
            ticker : tickerObj,
            kline  : klineObj
        }

        res.send(resObj)
    })
});

module.exports = router;
