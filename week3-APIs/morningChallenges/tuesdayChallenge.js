/* eslint-env mocha */
const expect = require('chai').expect

const isValidHex = (string) => /^([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/.test(string)

describe('isValidHex should', () => {
  it('return true if given string is valid hexadecimal (3 or six letters a-f or numbers)', () => {
    expect(isValidHex('1D1f21')).to.equal(true)
    expect(isValidHex('89D387')).to.equal(true)
    expect(isValidHex('b0f')).to.equal(true)
  })
  it('return false if given string is not valid hexadecimal', () => {
    expect(isValidHex('potato')).to.equal(false)
    expect(isValidHex('AFZ435')).to.equal(false)
    expect(isValidHex('AF38C')).to.equal(false)
  })
})

const isSmaller = (string) => /^([1-4][0-9]|5[0-5]|[0-9])$/.test(string)


describe('isSmaller (using regex.test or string.match) should', () => {
  it('return true if string is a number smaller than 55', () => {
    expect(isSmaller('3')).to.equal(true)
    expect(isSmaller('10')).to.equal(true)
    expect(isSmaller('25')).to.equal(true)
  })
  it('return false if string is a number greater than 55', () => {
    expect(isSmaller('56')).to.equal(false)
    expect(isSmaller('129')).to.equal(false)
  })
})

const search = (dict, string) => {
  const regex = new RegExp(`^${string}`)
  return dict.filter((string) => regex.test(string))
}

describe('search function should', () => {
  const dict = ['abacus', 'polywhirl', 'obama', 'shorts', 'electric', 'potato']
  it('find the elements of an array that begin with a given string', () => {
    expect(search(dict, 'ab')).to.deep.equal(['abacus'])
    expect(search(dict, 'po')).to.deep.equal(['polywhirl', 'potato'])
  })
  it('return empty array if no matches are present', () => {
    expect(search(dict, 'no')).to.deep.equal([])
  })
})

const isValidTime = (string) => /^([0-1][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/.test(string)

describe('isValidTime function should', () => {
  it('return true for valid time in xx:xx:xx format', () => {
    expect(isValidTime('00:30:00')).to.equal(true)
    expect(isValidTime('23:00:59')).to.equal(true)
    expect(isValidTime('03:03:03')).to.equal(true)
  })
  it('return false for invalid time', () => {
    expect(isValidTime('24:01:01')).to.equal(false)
    expect(isValidTime('14:15:60')).to.equal(false)
    expect(isValidTime('potato')).to.equal(false)
    expect(isValidTime('03:55:143')).to.equal(false)
  })
})

const findProperNouns = (string) => string.match(/[^\.]\s([A-Z][a-z]+)/g).map((x) => x.slice(2))
const findProperNounsAlt = (string) => {
  const regex = /[^\.]\s([A-Z][a-z]+)/g
  let returnArr = []
  let arr
  while ((arr = regex.exec(string)) !== null) {
    returnArr.push(arr[1])
  }
  return returnArr
}

describe('findProperNouns (using regex.exec or string.match) should', () => {
  it('return a proper noun in a given string, in an array', () => {
    const string = 'proper noun in a sentence about Paris.'
    expect(findProperNouns(string)).to.deep.equal(['Paris'])
  })
  it('return several proper nouns in a given string, ignoring those following full stops', () => {
    const string2 = 'Several words in a string. Like Berlin, Rotterdam, Founders & Coders.'
    expect(findProperNouns(string2)).to.deep.equal(['Berlin', 'Rotterdam', 'Founders', 'Coders'])
  })
})
