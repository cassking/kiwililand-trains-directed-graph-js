let graph =
 {
  "AB":5,
 "BC":4,
 "CD":8,
 "DC":8,
 "DE":6,
 "AD":5,
 "CE":2,
 "EB":3,
 "AE":7
}

function getRoute(start,newGraph){
  let newRoute = {};
  Object.keys(newGraph).forEach( (key)=>{
    let keySplit = key.split("")
    if(start === keySplit[0]){
       newRoute[key] = newGraph[key]
       console.log(newRoute[key])
    }
  })
  return newRoute;
}

function calculateDistance(start, end){
  let pair, routeSplit, newPair, routes, newRoutes;
  routes = getRoute(start, graph)
    Object.keys(routes).forEach( (route) =>{
      pair = { route: routes[route] }
      routeSplit=route.split("")
      if(routeSplit[1] === end )
      {
        return pair.route
      }
      else
      {
        newRoutes = getRoute(end, graph)
        Object.keys(newRoutes).forEach( (newRoute) =>{
          newPair = { newRoute: newRoutes[newRoute] }
          newRoute = newRoute.split("")
           return pair.route + calculateDistance(newRoute[0]-1, newRoute[1]-1)
        })
    }
  })
}

function shortestRoute(start, end) {
  let newGraph = {}
  let distance
  let minDistance = Number.MAX_SAFE_INTEGER ;
  newGraph = getRoute(start,graph)
  Object.keys(newGraph).forEach( ( key ) =>{
    console.log('NewGraph:, Key:___', key,'End___',end)
    splitKey = key.split("")
    distance = calculateDistance(splitKey[1],end)
    console.log('Splitkey:___', splitKey[1], 'End:___', end
    if (distance < minDistance) {
      minDistance = distance
    }
  })
  console.log('distance2', distance)
  return distance;
}
shortestRoute('A', 'C')//9 expected output
shortestRoute('B', 'B')//9 expected output
