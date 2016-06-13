'use strict'


const Response = require('../index')
const expect = require('expect')

/**
 *      Missing arguments
 */
expect(() => {
    new Response()
}).toThrow('status code expected a number but found undefined')

expect(() => {
    new Response(200)
}).toThrow('message expected a string but found undefined')

expect(() => {
    new Response(200, 'message goes here')
}).toNotThrow()


/**
 *      Wrong data types
 */
expect(() => {
    new Response('200')
}).toThrow('status code expected a number but found string')

expect(() => {
    new Response(200, {})
}).toThrow('message expected a string but found object')

expect(() => {
    new Response(200, 'message goes here', 'Feedback message')
}).toThrow('data expected an object or undefined but found string')


/**
 *      Data persistence
 */
let r1 = new Response(200, 'Stuff here!')
expect(r1.code).toEqual(200)
expect(r1.message).toEqual('Stuff here!')
expect(r1.data).toNotExist()

r1 = new Response(200, 'Stuff here!', [1,2,3,4,5,6,7,8,9])
expect(r1.code).toEqual(200)
expect(r1.message).toEqual('Stuff here!')
expect(r1.data).toEqual([1,2,3,4,5,6,7,8,9])

r1 = new Response(200, 'Stuff here!', {user_count:1})
expect(r1.code).toEqual(200)
expect(r1.message).toEqual('Stuff here!')
expect(r1.data).toEqual({user_count:1})



console.log('\nTest passed!\n')