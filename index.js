const DICT = require('./kigo.json')
var moment = require('moment');

var currentYear = moment().year()

/** 
* Saijiki break the calendar into five seasons (spring, summer, autumn, winter and new year)
* that correspond to traditional western solar calendar dates. This table is used
* in that conversion
**/

const DATE_TABLE = {
	season: [
		{
			name: 'new year',
			min: String(currentYear) + '-01-01',
			max: String(currentYear) + '-01-15'
		},
		{
			name: 'spring',
			min: String(currentYear) + '-02-04',
			max: String(currentYear) + '-05-05'
		},
		{
			name: 'summer',
			min: String(currentYear) + '-05-06',
			max: String(currentYear) + '-08-07'
		},
		{
			name: 'autumn',
			min: String(currentYear) + '-08-08',
			max: String(currentYear) + '-11-06'
		},
		{
			name: 'winter',
			min: String(currentYear) + '-11-07',
			max: String(currentYear + 1) + '-02-03'
		}
	],
	subSeason: [
		{
			name: 'new year',
			min: String(currentYear) + '-01-01',
			max: String(currentYear) + '-01-15'
		},
		{
			name: 'early spring',
			min: String(currentYear) + '-02-04',
			max: String(currentYear) + '-03-05'
		},
		{
			name: 'mid spring',
			min: String(currentYear) + '-03-06',
			max: String(currentYear) + '-04-04'
		},
		{
			name: 'late spring',
			min: String(currentYear) + '-04-05',
			max: String(currentYear) + '-05-05'
		},
		{
			name: 'early summer',
			min: String(currentYear) + '-05-06',
			max: String(currentYear) + '-06-05'
		},
		{
			name: 'mid summer',
			min: String(currentYear) + '-06-06',
			max: String(currentYear) + '-07-06'
		},
		{
			name: 'late summer',
			min: String(currentYear) + '-07-07',
			max: String(currentYear) + '-08-07'
		},
		{
			name: 'early autumn',
			min: String(currentYear) + '-08-08',
			max: String(currentYear) + '-09-07'
		},
		{
			name: 'mid autumn',
			min: String(currentYear) + '-09-08',
			max: String(currentYear) + '-10-07'
		},
		{
			name: 'late autumn',
			min: String(currentYear) + '-10-08',
			max: String(currentYear) + '-11-06'
		},
		{
			name: 'early winter',
			min: String(currentYear) + '-11-07',
			max: String(currentYear) + '-12-06'
		},
		{
			name: 'mid winter',
			min: String(currentYear) + '-12-07',
			max: String(currentYear + 1) + '-01-04'
		},
		{
			name: 'late winter',
			min: String(currentYear + 1) + '-01-05',
			max: String(currentYear + 1) + '-02-03'
		}
	]	
}



var saijiki =  {
	/**
	 * via https://gist.github.com/jherax/f11d669ba286f21b7a2dcff69621eb72
	 * 
	 * Filters an array of objects with multiple criteria.
	 *
	 * @param  {Array}  array: the array to filter
	 * @param  {Object} filters: an object with the filter criteria as the property names
	 * @return {Array}
	*/
	_multiFilter: function(array, filters) {
	  const filterKeys = Object.keys(filters);
	  // filters all elements passing the criteria
	  return array.filter((item) => {
	    // dynamically validate all filter criteria
	    return filterKeys.every(key => {
	      // ignores an empty filter
	      if (!filters[key].length) return true;
	      return filters[key].includes(item[key]);
	    });
	  });
	},
	/**
	 * Return an array of kigo that match search terms
	 *
	 * @param {terms} object: an object containing the keys to filter saijiki on. Values in form of array.
	 * @return {Array}: array of relevant kigo  
	*/
	filter: function(terms) {
		return this._multiFilter(DICT, terms)
	},
	/**
	 * Returns a list of kigo that match todays date
	 *
	 * @param {subSeason} boolean: create kigo list from subseason rather than core season. Defaults to false
	 * @return {Array}: array of relevant kigo  
 	*/
 	today: function(subSeason = false) {
 		let currentSeason, kigoArray

 		if (subSeason) {
	 		DATE_TABLE.subSeason.forEach(season => {
	 			if(moment().isBetween(season.min, season.max)) {
	 				currentSeason = season.name
	 			}
	 		}) 			
 		
			kigoArray = DICT.filter(kigo => kigo.subSeason === currentSeason);
 
 		} else { 			
	 		DATE_TABLE.season.forEach(season => {
	 			if(moment().isBetween(season.min, season.max)) {
	 				currentSeason = season.name
	 			}
	 		}) 			

			kigoArray = DICT.filter(kigo => kigo.season === currentSeason);

 		}
		
		return kigoArray
 	}
}

module.exports = saijiki