
// var Point = {
//     startPoint: {
//         longtitude: 38.763611,
//         latitude: 9.005401
//     },
//     endPoint: {
//         longtitude: 38.763611,
//         latitude: 9.005401
//     },
//     cost: 150,
//     timestamp: "10-06-26 02:31:29,573",
// }

// [
    // {
    //     startPoint: {
    //         longtitude: 38.763611,
    //         latitude: 9.003401
    //     },
    //     endPoint: {
    //         longtitude: 38.773611,
    //         latitude: 9.005401
    //     },
    //     cost: 150,
    //     timestamp: "10-06-26 02:31:29,573",
    // },
  var points =[   {
        startPoint: {
            longtitude: 38.763611,
            latitude: 9.015401
        },
        endPoint: {
            longtitude: 38.793611,
            latitude: 9.005401
        },
        cost: 150,
        timestamp: "10-06-26 02:31:29,573",
    }
    , {
        startPoint: {
            longtitude: 38.764611,
            latitude: 9.005401
        },
        endPoint: {
            longtitude: 38.763611,
            latitude: 9.007401
        },
        cost: 150,
        timestamp: "10-06-26 02:31:29,573",
    },{
        startPoint: {
            longtitude: 38.76361,
            latitude: 9.003401
        },
        endPoint: {
            longtitude: 38.771611,
            latitude: 9.005401
        },
        cost: 150,
        timestamp: "10-06-26 02:31:29,573",
    },
    {
        startPoint: {
            longtitude: 38.763011,
            latitude: 9.015301
        },
        endPoint: {
            longtitude: 38.793611,
            latitude: 9.01401
        },
        cost: 150,
        timestamp: "10-06-26 02:31:29,573",
    }
    , {
        startPoint: {
            longtitude: 38.764611,
            latitude: 9.015401
        },
        endPoint: {
            longtitude: 38.763611,
            latitude: 9.107401
        },
        cost: 150,
        timestamp: "10-06-26 02:31:29,573",
    }
]
const getRandom = (min ,max) => {
    return (Math.floor(Math.random() * (max - min) + min))/1000000
}

const getPoints = ()=>{
    var p = []
    for (let i=0; i < 100 ; i++){
        p.push(
            {
                startPoint: {
                    latitude: getRandom(8884441 , 9085311),
                     longtitude: getRandom(38650742 , 38854456)
                },
                endPoint: {
                    latitude: getRandom(8884441 , 9085311),
                     longtitude: getRandom(38650742 , 38854456)
                },
                cost: Math.floor(Math.random() * (700 - 50) + 50),
                timestamp: 1641282525,
            }
        )
    }
    return p
} 
// // 8.884441196234114, 38.76651504996145
// // 9.030929890131631, 38.65074210184486
// // 9.085311787262246, 38.685459295946714
// // 9.071914113346198, 38.85445620519251

points = getPoints()

export default points

