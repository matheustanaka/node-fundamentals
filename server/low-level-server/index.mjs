//import http module, which is considered a low level module
import http from 'http'
// Our host is your IP machine, like 127.0.1
const host = 'localhost'
const port = 8000 //  pass the port

//http module has a function that create a server, then you need to make a callback to return the request or response
const server = http.createServer((req, res) => {
  if (req.method === 'POST') {// if we are sending data to our client
    let body = ''//body should starts empty, because we have nothing to send
    // add a listener to check the request, then pass data
    req.on('data', chunk => {
        //our body will be in bytes, like random numbers that have the content, for that, we to transform our data inside of our body in string
      body += chunk.toString()
      /*
      chunk list one by one and forms an array until the number of elements in the resultant array is equal to the given number in the second parameter.
      */
    })

    req.on('end', () => {
        //using a header to indicate the format that we want to receive the data, for example, json
      if (req.headers['content-type'] === 'application/json') {
        body = JSON.parse(body)
      }

      console.log(body)
      res.writeHead(201)// The HTTP 201 Created success status response code indicates that the request has succeeded and has led to the creation of a resource
      res.end('ok')
    })
  } else { // if is not a POST method, will be a get, so here in else statement, is a GET method
    res.writeHead(200)//The HTTP 200 OK success status response code indicates that the request has succeeded.
    res.end('hello from my server')
  }

})

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`)
})