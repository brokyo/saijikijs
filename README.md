# Saijiki.js
> A *Saijiki* is a resource for poets that lists *kigo*, seasonal ideas
> pervasive in Japanese culture, for the use of poets. 
> 
Saijiki.js is an English language Saijiki 【歳時記】implemented in JavaScript for computational poets and net artists. It contains much of the information a traditional *Saijiki* does and has some additional parameters that enable cool digital stuff.

I hope it can be used as a springboard for digital art as a traditional *Saijiki* is used for analog art.

Want to know more? Check out the full introduction.



## Usage

Install it
```
npm install saijiki.js
```

Include it

```
var saijiki = require(`saijikijs`)
```
Filter *kigo*
```
// kigoList will be an array of all kigo that match your terms
let kigoList = saijiki.filter({season: [`spring`], weather: [`clear`]})
```
Or get *kigo* relevant to today
```
// kigoList will be an array of kigo that are relevant to today's date
// pass `true` as a param to `today()` to get kigo matching the subseason
// you could do this buy also filter on weather and conditions. Wouldn't that be fun.
let kigoList = saijiki.today()
```

## Things You Can Filter On
You can filter an arbitrary number of keys and values with `filter()`
Pass an object to `filter()` and pass the values as an array of strings
|Key|Value  |
|--|--|
| season |spring, summer, autumn, winter, new year |
| subSeason | early spring, mid spring, late spring, all spring, early summer, mid summer, late summer, all summer, early autumn, mid autumn, late autumn, all autumn, early winter, mid winter, late winter, all winter, new year |
|category | the season, the heavens, the earth, humanity, observances, animals, plants|
| timeOfDay | morning, afternoon, evening |
| weather | rain, snow, cloudy, clear|
| conditions | cold, hot |

## Kigo Object
Returned *kigo* objects give you a bunch of information. Here's a sample for 日永 which I think is nice imagery

```
{
    "pronunciation": "hinaga",
    "hiragana": "ひなが",
    "japanese": "日永",
    "description": "day(s) lengthening",
    "season": "spring",
    "subSeason": "all spring",
    "category": "the season",
    "commentary": "",
    "timeOfDay": "afternoon",
    "weather": "",
    "generalConditions": "",
    "source": "http://jti.lib.virginia.edu/japanese/haiku/saijiki/1sp.html",
    "text": "Nyūmon Saijiki"
  }
   ```

## Going Forward
This is an early version of what may become a full digital *saijiki*. I'd like to add more kigo, more filter categories, and links to haiku using the terms. Always interested in help or feedback.  

## License

```
This is free and unencumbered software released into the public domain.

For more information, please refer to <http://unlicense.org/>
```
