import assert from 'assert'
import { add } from './myTest.mjs'

try {
  console.log('add() should add two numbers ')
  assert.strictEqual(add(2, 5), 10)
  console.log('  ✅ passed')
} catch (e) {
  console.log('  🚫 fail')
  console.error(e)
}

// trying to get an error
// try {
//     console.log('add() should add two numbers ')
//     assert.strictEqual(add(2, 5), 3)
//     console.log('  ✅ passed')
//   } catch (e) {
//     console.log('  🚫 fail')
//     console.error(e)
//   }