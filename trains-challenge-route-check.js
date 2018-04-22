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
function routeCheck(route, start)
{
  let splitRoute = route.split("")
  let flagFirst= true;
  let total =0
  let savedKey;
  splitRoute.forEach( ( key ) =>
  {
    if(flagFirst)
    {
      savedKey = key
      flagFirst = false;
    }
    else
    {
      savedKey+=key
    }
      if(graph[savedKey]!=null )
      {
        total+=graph[savedKey]
        savedKey = savedKey.charAt(1)

      } else if(savedKey.length===2)
      {
        console.log('route not exists')
        return null;
      }
  })
  console.log('Route total', total)
}
routeCheck('ABC')
routeCheck('AD')
routeCheck('ADC')
routeCheck('AEBCD')
routeCheck('AED')
