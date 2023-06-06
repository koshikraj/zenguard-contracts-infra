/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { SampleNFT, SampleNFTInterface } from "../../contracts/SampleNFT";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405260006006553480156200001657600080fd5b5060405162002a9d38038062002a9d83398181016040528101906200003c9190620001ff565b818181600090816200004f9190620004cf565b508060019081620000619190620004cf565b5050505050620005b6565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620000d5826200008a565b810181811067ffffffffffffffff82111715620000f757620000f66200009b565b5b80604052505050565b60006200010c6200006c565b90506200011a8282620000ca565b919050565b600067ffffffffffffffff8211156200013d576200013c6200009b565b5b62000148826200008a565b9050602081019050919050565b60005b838110156200017557808201518184015260208101905062000158565b60008484015250505050565b60006200019862000192846200011f565b62000100565b905082815260208101848484011115620001b757620001b662000085565b5b620001c484828562000155565b509392505050565b600082601f830112620001e457620001e362000080565b5b8151620001f684826020860162000181565b91505092915050565b6000806040838503121562000219576200021862000076565b5b600083015167ffffffffffffffff8111156200023a57620002396200007b565b5b6200024885828601620001cc565b925050602083015167ffffffffffffffff8111156200026c576200026b6200007b565b5b6200027a85828601620001cc565b9150509250929050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620002d757607f821691505b602082108103620002ed57620002ec6200028f565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620003577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000318565b62000363868362000318565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620003b0620003aa620003a4846200037b565b62000385565b6200037b565b9050919050565b6000819050919050565b620003cc836200038f565b620003e4620003db82620003b7565b84845462000325565b825550505050565b600090565b620003fb620003ec565b62000408818484620003c1565b505050565b5b81811015620004305762000424600082620003f1565b6001810190506200040e565b5050565b601f8211156200047f576200044981620002f3565b620004548462000308565b8101602085101562000464578190505b6200047c620004738562000308565b8301826200040d565b50505b505050565b600082821c905092915050565b6000620004a46000198460080262000484565b1980831691505092915050565b6000620004bf838362000491565b9150826002028217905092915050565b620004da8262000284565b67ffffffffffffffff811115620004f657620004f56200009b565b5b620005028254620002be565b6200050f82828562000434565b600060209050601f83116001811462000547576000841562000532578287015190505b6200053e8582620004b1565b865550620005ae565b601f1984166200055786620002f3565b60005b8281101562000581578489015182556001820191506020850194506020810190506200055a565b86831015620005a157848901516200059d601f89168262000491565b8355505b6001600288020188555050505b505050505050565b6124d780620005c66000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb46514610249578063b88d4fde14610265578063c87b56dd14610281578063e985e9c5146102b1576100ea565b80636352211e146101cb57806370a08231146101fb57806395d89b411461022b576100ea565b8063095ea7b3116100c8578063095ea7b31461016d5780631249c58b1461018957806323b872dd1461019357806342842e0e146101af576100ea565b806301ffc9a7146100ef57806306fdde031461011f578063081812fc1461013d575b600080fd5b6101096004803603810190610104919061175c565b6102e1565b60405161011691906117a4565b60405180910390f35b6101276103c3565b604051610134919061184f565b60405180910390f35b610157600480360381019061015291906118a7565b610455565b6040516101649190611915565b60405180910390f35b6101876004803603810190610182919061195c565b61049b565b005b6101916105b2565b005b6101ad60048036038101906101a8919061199c565b6105d8565b005b6101c960048036038101906101c4919061199c565b610638565b005b6101e560048036038101906101e091906118a7565b610658565b6040516101f29190611915565b60405180910390f35b610215600480360381019061021091906119ef565b6106de565b6040516102229190611a2b565b60405180910390f35b610233610795565b604051610240919061184f565b60405180910390f35b610263600480360381019061025e9190611a72565b610827565b005b61027f600480360381019061027a9190611be7565b61083d565b005b61029b600480360381019061029691906118a7565b61089f565b6040516102a8919061184f565b60405180910390f35b6102cb60048036038101906102c69190611c6a565b610907565b6040516102d891906117a4565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103ac57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806103bc57506103bb8261099b565b5b9050919050565b6060600080546103d290611cd9565b80601f01602080910402602001604051908101604052809291908181526020018280546103fe90611cd9565b801561044b5780601f106104205761010080835404028352916020019161044b565b820191906000526020600020905b81548152906001019060200180831161042e57829003601f168201915b5050505050905090565b600061046082610a05565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006104a682610658565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610516576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161050d90611d7c565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610535610a50565b73ffffffffffffffffffffffffffffffffffffffff16148061056457506105638161055e610a50565b610907565b5b6105a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059a90611e0e565b60405180910390fd5b6105ad8383610a58565b505050565b6105be33600654610b11565b600660008154809291906105d190611e5d565b9190505550565b6105e96105e3610a50565b82610d2e565b610628576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161061f90611f17565b60405180910390fd5b610633838383610dc3565b505050565b6106538383836040518060200160405280600081525061083d565b505050565b600080610664836110bc565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036106d5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106cc90611f83565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361074e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161074590612015565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600180546107a490611cd9565b80601f01602080910402602001604051908101604052809291908181526020018280546107d090611cd9565b801561081d5780601f106107f25761010080835404028352916020019161081d565b820191906000526020600020905b81548152906001019060200180831161080057829003601f168201915b5050505050905090565b610839610832610a50565b83836110f9565b5050565b61084e610848610a50565b83610d2e565b61088d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161088490611f17565b60405180910390fd5b61089984848484611265565b50505050565b60606108aa82610a05565b60006108b46112c1565b905060008151116108d457604051806020016040528060008152506108ff565b806108de846112d8565b6040516020016108ef929190612071565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610a0e816113a6565b610a4d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a4490611f83565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610acb83610658565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610b80576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b77906120e1565b60405180910390fd5b610b89816113a6565b15610bc9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bc09061214d565b60405180910390fd5b610bd76000838360016113e7565b610be0816113a6565b15610c20576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c179061214d565b60405180910390fd5b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4610d2a6000838360016113ed565b5050565b600080610d3a83610658565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610d7c5750610d7b8185610907565b5b80610dba57508373ffffffffffffffffffffffffffffffffffffffff16610da284610455565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610de382610658565b73ffffffffffffffffffffffffffffffffffffffff1614610e39576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e30906121df565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610ea8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e9f90612271565b60405180910390fd5b610eb583838360016113e7565b8273ffffffffffffffffffffffffffffffffffffffff16610ed582610658565b73ffffffffffffffffffffffffffffffffffffffff1614610f2b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f22906121df565b60405180910390fd5b6004600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46110b783838360016113ed565b505050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611167576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161115e906122dd565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405161125891906117a4565b60405180910390a3505050565b611270848484610dc3565b61127c848484846113f3565b6112bb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112b29061236f565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b6060600060016112e78461157a565b01905060008167ffffffffffffffff81111561130657611305611abc565b5b6040519080825280601f01601f1916602001820160405280156113385781602001600182028036833780820191505090505b509050600082602001820190505b60011561139b578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a858161138f5761138e61238f565b5b04945060008503611346575b819350505050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166113c8836110bc565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b50505050565b50505050565b60006114148473ffffffffffffffffffffffffffffffffffffffff166116cd565b1561156d578373ffffffffffffffffffffffffffffffffffffffff1663150b7a0261143d610a50565b8786866040518563ffffffff1660e01b815260040161145f9493929190612413565b6020604051808303816000875af192505050801561149b57506040513d601f19601f820116820180604052508101906114989190612474565b60015b61151d573d80600081146114cb576040519150601f19603f3d011682016040523d82523d6000602084013e6114d0565b606091505b506000815103611515576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161150c9061236f565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611572565b600190505b949350505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083106115d8577a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083816115ce576115cd61238f565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310611615576d04ee2d6d415b85acef8100000000838161160b5761160a61238f565b5b0492506020810190505b662386f26fc10000831061164457662386f26fc10000838161163a5761163961238f565b5b0492506010810190505b6305f5e100831061166d576305f5e10083816116635761166261238f565b5b0492506008810190505b61271083106116925761271083816116885761168761238f565b5b0492506004810190505b606483106116b557606483816116ab576116aa61238f565b5b0492506002810190505b600a83106116c4576001810190505b80915050919050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61173981611704565b811461174457600080fd5b50565b60008135905061175681611730565b92915050565b600060208284031215611772576117716116fa565b5b600061178084828501611747565b91505092915050565b60008115159050919050565b61179e81611789565b82525050565b60006020820190506117b96000830184611795565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156117f95780820151818401526020810190506117de565b60008484015250505050565b6000601f19601f8301169050919050565b6000611821826117bf565b61182b81856117ca565b935061183b8185602086016117db565b61184481611805565b840191505092915050565b600060208201905081810360008301526118698184611816565b905092915050565b6000819050919050565b61188481611871565b811461188f57600080fd5b50565b6000813590506118a18161187b565b92915050565b6000602082840312156118bd576118bc6116fa565b5b60006118cb84828501611892565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006118ff826118d4565b9050919050565b61190f816118f4565b82525050565b600060208201905061192a6000830184611906565b92915050565b611939816118f4565b811461194457600080fd5b50565b60008135905061195681611930565b92915050565b60008060408385031215611973576119726116fa565b5b600061198185828601611947565b925050602061199285828601611892565b9150509250929050565b6000806000606084860312156119b5576119b46116fa565b5b60006119c386828701611947565b93505060206119d486828701611947565b92505060406119e586828701611892565b9150509250925092565b600060208284031215611a0557611a046116fa565b5b6000611a1384828501611947565b91505092915050565b611a2581611871565b82525050565b6000602082019050611a406000830184611a1c565b92915050565b611a4f81611789565b8114611a5a57600080fd5b50565b600081359050611a6c81611a46565b92915050565b60008060408385031215611a8957611a886116fa565b5b6000611a9785828601611947565b9250506020611aa885828601611a5d565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611af482611805565b810181811067ffffffffffffffff82111715611b1357611b12611abc565b5b80604052505050565b6000611b266116f0565b9050611b328282611aeb565b919050565b600067ffffffffffffffff821115611b5257611b51611abc565b5b611b5b82611805565b9050602081019050919050565b82818337600083830152505050565b6000611b8a611b8584611b37565b611b1c565b905082815260208101848484011115611ba657611ba5611ab7565b5b611bb1848285611b68565b509392505050565b600082601f830112611bce57611bcd611ab2565b5b8135611bde848260208601611b77565b91505092915050565b60008060008060808587031215611c0157611c006116fa565b5b6000611c0f87828801611947565b9450506020611c2087828801611947565b9350506040611c3187828801611892565b925050606085013567ffffffffffffffff811115611c5257611c516116ff565b5b611c5e87828801611bb9565b91505092959194509250565b60008060408385031215611c8157611c806116fa565b5b6000611c8f85828601611947565b9250506020611ca085828601611947565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611cf157607f821691505b602082108103611d0457611d03611caa565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b6000611d666021836117ca565b9150611d7182611d0a565b604082019050919050565b60006020820190508181036000830152611d9581611d59565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000602082015250565b6000611df8603d836117ca565b9150611e0382611d9c565b604082019050919050565b60006020820190508181036000830152611e2781611deb565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611e6882611871565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611e9a57611e99611e2e565b5b600182019050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206f7220617070726f76656400000000000000000000000000000000000000602082015250565b6000611f01602d836117ca565b9150611f0c82611ea5565b604082019050919050565b60006020820190508181036000830152611f3081611ef4565b9050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b6000611f6d6018836117ca565b9150611f7882611f37565b602082019050919050565b60006020820190508181036000830152611f9c81611f60565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b6000611fff6029836117ca565b915061200a82611fa3565b604082019050919050565b6000602082019050818103600083015261202e81611ff2565b9050919050565b600081905092915050565b600061204b826117bf565b6120558185612035565b93506120658185602086016117db565b80840191505092915050565b600061207d8285612040565b91506120898284612040565b91508190509392505050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b60006120cb6020836117ca565b91506120d682612095565b602082019050919050565b600060208201905081810360008301526120fa816120be565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000612137601c836117ca565b915061214282612101565b602082019050919050565b600060208201905081810360008301526121668161212a565b9050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b60006121c96025836117ca565b91506121d48261216d565b604082019050919050565b600060208201905081810360008301526121f8816121bc565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b600061225b6024836117ca565b9150612266826121ff565b604082019050919050565b6000602082019050818103600083015261228a8161224e565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b60006122c76019836117ca565b91506122d282612291565b602082019050919050565b600060208201905081810360008301526122f6816122ba565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b60006123596032836117ca565b9150612364826122fd565b604082019050919050565b600060208201905081810360008301526123888161234c565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600081519050919050565b600082825260208201905092915050565b60006123e5826123be565b6123ef81856123c9565b93506123ff8185602086016117db565b61240881611805565b840191505092915050565b60006080820190506124286000830187611906565b6124356020830186611906565b6124426040830185611a1c565b818103606083015261245481846123da565b905095945050505050565b60008151905061246e81611730565b92915050565b60006020828403121561248a576124896116fa565b5b60006124988482850161245f565b9150509291505056fea26469706673582212200e345374b5475c998567232b90dc881e9923975551b07e003a9fbeed0a32061264736f6c63430008110033";

type SampleNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SampleNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SampleNFT__factory extends ContractFactory {
  constructor(...args: SampleNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SampleNFT> {
    return super.deploy(name, symbol, overrides || {}) as Promise<SampleNFT>;
  }
  override getDeployTransaction(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  override attach(address: string): SampleNFT {
    return super.attach(address) as SampleNFT;
  }
  override connect(signer: Signer): SampleNFT__factory {
    return super.connect(signer) as SampleNFT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SampleNFTInterface {
    return new utils.Interface(_abi) as SampleNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SampleNFT {
    return new Contract(address, _abi, signerOrProvider) as SampleNFT;
  }
}
