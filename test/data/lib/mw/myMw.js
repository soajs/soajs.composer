"use strict";

module.exports = {
	
	"mw": function(req, res){
		return res.soajs.returnAPIResponse(req, res, {data: "Working..."});
	}
};