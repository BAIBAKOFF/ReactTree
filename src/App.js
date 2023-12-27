import React from "react";
import Tree from "react-d3-tree";
import { createOrgChartNode } from "./data/test";
import { useCenteredTree } from "./helpers";
import logo from './mdj.png';

const containerStyles = {
  width: "100vw",
  height: "100vh"
};

const data = {
    "id": "ffc12b1c-951c-460c-8e4b-54f830e25363",
    "isKyc": false,
    "status": "COMPLETED",
    "subCustomerEmail": null,
    "account": {
        "email": "sergei.baibakov@vespia.io"
    },
    "assets": [],
    "comments": [],
    "createdAt": "2023-12-05T10:10:41.388Z",
    "entities": [
        {
            "id": "3769ed7c-be69-443d-978b-302edad4dc41",
            "info": {
                "name": "CARS OU",
                "countryCode": "EE",
                "registrationCode": "14521252",
                "isCorporate": true,
                "share": {}
            },
            "idMonitoring": false,
            "entityChecks": [
                {},
                {},
                {},
                {},
                {}
            ],
            "relation": [{
                "info": {
                    "date": {"start": "2020-07-28T00:00:00.000Z"},
                    "roles": ["Management board member"]
                }
            }]
        },
        {
            "id": "aa859523-583d-4625-92b2-2a44d79f4c96",
            "info": {
                "name": 'Kris',
                "registrationCode": "46903300337",
                "isCorporate": false,
                "country": "Estonia",
                "share": {
                    currency: "EUR",
                    percentage: 1.68,
                    size: 55,
                    type: "Sole ownership",
                }
            },
            "idMonitoring": false,
            "entityChecks": [
                {}
            ],
            "relation": [{
                "info": {
                    "date": {"start": "2020-07-28T00:00:00.000Z"},
                    "roles": ["Shareholder"]
                }
            }],
        },
        {
            "id": "0c063a8d-4ee7-46dd-a4a7-43a771f961b3",
            "info": {
                "name": 'Germany GmbH',
                "registrationCode": "46903100325",
                "isCorporate": false,
                "share": {
                    currency: "EUR",
                    percentage: 21.8,
                    size: 155,
                    type: "Sole ownership",
                }
            },
            "idMonitoring": false,
            "entityChecks": [],
            "relation": [{
                "info": {
                    "date": {"start": "2020-07-28T00:00:00.000Z"},
                    "roles": ["Shareholder"]
                }
            }],
        },
        {
            "id": "8f1a750e-ba77-471c-8579-a0d50b7b51da",
            "info": {
                "name": 'Icebreaker',
                "registrationCode": "46903300337",
                "isCorporate": false,
                "country": "Estonia",
                "share": {
                    currency: "EUR",
                    percentage: 21.84,
                    size: 714,
                    type: "Sole ownership",
                }
            },
            "idMonitoring": false,
            "entityChecks": [],
            "relation": [{
                "info": {
                    "date": {"start": "2020-07-28T00:00:00.000Z"},
                    "roles": ["Shareholder"]
                }
            }],
        },
        {
            "id": "fd40b190-3f7c-4778-856e-be2ecde3b862",
            "info": {
                "name":
                    "Karlos",
                "registrationCode": "46903300337",
                "isCorporate": false,
                "share": {
                    currency: "EUR",
                    percentage: 30.59,
                    size: 1000,
                    type: "Sole ownership",
                }
            },
            "idMonitoring": false,
            "entityChecks": [],
            "relation": [{
                "info": {
                    "date": {"start": "2020-07-28T00:00:00.000Z"},
                    "roles": ["Founder"]
                }
            }],
        },
        {
            "comments": [],
            "entityChecks": [],
            "id": "119c3313-faf6-440e-8623-fdc1b1ee48f0",
            "idMonitoring": false,
            "info": {
                "country": "Estonia",
                "isCorporate": false,
                "name": "Allaba",
                "registrationCode": "1241242142",
                "share": {
                    "currency": "EUR",
                    "size": 2500,
                    "type": "Sole property"
                }
            },
            "relation": [{
                "info": {
                    "date": {"start": "2020-07-28T00:00:00.000Z"},
                    "roles": ["Management board member"]
                }
            }],
        },
        {
            "comments": [],
            "entityChecks": [],
            "id": "119c3313-faf6-440e-8623-fdc1b1ee48f0",
            "idMonitoring": false,
            "info": {
                "country": "Estonia",
                "isCorporate": false,
                "name": "Pain",
                "registrationCode": "12125125252",
                "share": {}
            },
            "relation": [{
                "info": {
                    "date": {"start": "2020-07-28T00:00:00.000Z"},
                    "roles": ["UBO"]
                }
            }],
        },
        {
            "comments": [],
            "entityChecks": [],
            "id": "119c3313-faf6-440e-8623-fdc1b1ee48f0",
            "idMonitoring": false,
            "info": {
                "country": "Estonia",
                "isCorporate": false,
                "name": 'Rolan',
                "registrationCode": "49202210286",
                "share": {
                    "currency": "EUR",
                    "percentage": 45.89,
                    "size": 1500,
                    "type": "Sole property"
                }
            },
            "relation": [{
                "info": {
                    "date": {"start": "2020-07-28T00:00:00.000Z"},
                    "roles": ["Shareholder"]
                }
            }],
        },
        {
            "comments": [],
            "entityChecks": [],
            "id": "119c3313-faf6-440e-8623-fdc1b1ee48f0",
            "idMonitoring": false,
            "info": {
                "country": "Estonia",
                "isCorporate": false,
                "name": 'Andrey',
                "registrationCode": "124124",
                "share": {}
            },
            "relation": [{
                "info": {
                    "date": {"start": "2020-07-28T00:00:00.000Z"},
                    "roles": ["UBO"]
                }
            }],
        }
    ],
    "rootEntity": {
        "id": "3769ed7c-be69-443d-978b-302edad4dc41",
        "info": {
            countryCode: "EE",
            isCorporate: true,
            name: "Cars OÜ",
            registrationCode: "152512522",
        },
        "idMonitoring": false,
        "entityChecks": [
            {},
            {},
            {},
            {},
            {}
        ],
        "relation": []
    },
    "updatedAt": "2023-12-05T12:10:45.132Z"
}

const orgChartData = createOrgChartNode(data, logo);

const renderForeignObjectNode = ({
                                   nodeDatum,
                                   toggleNode,
                                   foreignObjectProps
                                 }) => (
    <g>
      <rect fill="#ffff" ry={10} width={250} height={100} x={-120} y={0}></rect>
        <image href={nodeDatum.logo} width="230" height="100" x='-110' y="0"
        />
      {/* `foreignObject` requires width & height to be explicitly set. */}
      <foreignObject {...foreignObjectProps}>
        <div style={{ height: '580px', borderRadius: '10px', marginLeft: '25px',  border: "1px solid black", backgroundColor: "#59288c" }}>
            <h1 style={{
                fontSize: '40px',
                padding: '15px',
                display: "flex",
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: "center",
                color: '#ffff',
                minHeight: "160px",
                borderBottom: '1px solid #eee',
                margin: '0'}}>{nodeDatum.companyName ? nodeDatum.companyName : nodeDatum.name}</h1>
            <h2 style={{
                display: nodeDatum.description ? 'flex' : 'none',
                fontSize: '40px',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: "100px",
                textAlign: "center",
                color: '#ffff' }}>{nodeDatum.description ? nodeDatum.description : ''}</h2>
            <p style={{
                display: nodeDatum.role ? 'flex' : 'none',
                padding: '20px 10px 20px 10px',
                fontSize: '40px',
                minHeight: '50px',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: "center",
                color: '#ffff',
                margin: '0' }}>{nodeDatum.role && ( <div><span style={{fontWeight: 'bold'}}>Role: </span>{nodeDatum.role}</div> )}</p>
            <p style={{
                display: nodeDatum.size ? 'flex' : 'none',
                padding: '20px 10px 20px 10px',
                fontSize: '40px',
                minHeight: '50px',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: "center",
                color: '#ffff',
                margin: '0' }}>{nodeDatum.size && ( <div><span style={{fontWeight: 'bold'}}>Size: </span>{nodeDatum.size}</div> )}</p>
            <p style={{
                display: nodeDatum.type ? 'flex' : 'none',
                padding: '20px 10px 20px 10px',
                fontSize: '40px',
                minHeight: '50px',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: "center",
                color: '#ffff',
                margin: '0' }}>{nodeDatum.type && ( <div><span style={{fontWeight: 'bold'}}>Type: </span>{nodeDatum.type}</div> )}</p>
            <p style={{
                display: nodeDatum.percents ? 'flex' : 'none',
                padding: '20px 10px 20px 10px',
                fontSize: '40px',
                minHeight: '50px',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: "center",
                color: '#ffff',
                margin: '0' }}>{nodeDatum.percents && ( <div><span style={{fontWeight: 'bold'}}>Percentage: </span>{nodeDatum.percents}</div> )}</p>

          {nodeDatum.children && (
              <button style={{ width: "100%", height: "130px", fontSize: '50px', marginTop: '87px', borderRadius: '20px 20px 10px 10px'}} onClick={toggleNode}>
                {nodeDatum.__rd3t.collapsed ? "Expand" : "Collapse"}
              </button>
          )}
        </div>
      </foreignObject>
    </g>
);


export default function App() {
  const [translate, containerRef] = useCenteredTree();
  const nodeSize = { x: 460, y: 1000 };
  const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, x: -240, y: -620 };


  return (
      <div style={containerStyles} ref={containerRef}>
        <Tree
            data={orgChartData}
            translate={translate}
            nodeSize={nodeSize}
            renderCustomNodeElement={(rd3tProps) =>
                renderForeignObjectNode({ ...rd3tProps, foreignObjectProps })
            }
            orientation="vertical"
        />
      </div>
  );
}
