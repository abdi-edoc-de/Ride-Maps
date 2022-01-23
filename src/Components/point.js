
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
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}


const getPoints = ()=>{
    var p = []
    for (let i=0; i < 40 ; i++){
    console.log(getRandom(9003401 ,  9107401), getRandom(38650742 , 38854456))
        p.push(
            {
                // 9.0080911442861, 38.71434250228439
                // 9.019848795970482, 38.8016434320629
                // 8.95550050808905, 38.73207738956802
                // 9.054726977967698, 38.737920978140394
                startPoint: {
                    latitude: getRandom(8955500 ,  9054726),
                     longtitude: getRandom( 38714342 , 38.801643)
                },
                endPoint: {
                    latitude: getRandom(9003401 ,  9107401),
                     longtitude: getRandom(38764611 , 38793611)
                },
                cost: Math.floor(Math.random() * (700 - 50) + 50),
                timestamp: randomDate(new Date(2012, 0, 1), new Date()),
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

