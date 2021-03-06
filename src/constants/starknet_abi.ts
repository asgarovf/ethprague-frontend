export const AUCTION = [
  {
    members: [
      {
        name: "active",
        offset: 0,
        type: "felt",
      },
      {
        name: "nft_id",
        offset: 1,
        type: "felt",
      },
      {
        name: "nft_addr",
        offset: 2,
        type: "felt",
      },
      {
        name: "reserve_price",
        offset: 3,
        type: "felt",
      },
      {
        name: "highest_bid",
        offset: 4,
        type: "felt",
      },
      {
        name: "lead_addr",
        offset: 5,
        type: "felt",
      },
      {
        name: "deadline",
        offset: 6,
        type: "felt",
      },
    ],
    name: "AuctionDetails",
    size: 7,
    type: "struct",
  },
  {
    inputs: [
      {
        name: "manager_addr",
        type: "felt",
      },
      {
        name: "owner_addr",
        type: "felt",
      },
    ],
    name: "constructor",
    outputs: [],
    type: "constructor",
  },
  {
    inputs: [
      {
        name: "nft_addr",
        type: "felt",
      },
      {
        name: "nft_id",
        type: "felt",
      },
    ],
    name: "get_auction_details",
    outputs: [
      {
        name: "details",
        type: "AuctionDetails",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "get_manager",
    outputs: [
      {
        name: "manager_addr",
        type: "felt",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        name: "new_manager",
        type: "felt",
      },
    ],
    name: "set_manager",
    outputs: [],
    type: "function",
  },
  {
    inputs: [
      {
        name: "nft_addr",
        type: "felt",
      },
      {
        name: "nft_id",
        type: "felt",
      },
      {
        name: "bid_amt",
        type: "felt",
      },
    ],
    name: "add_bid",
    outputs: [],
    type: "function",
  },
  {
    inputs: [
      {
        name: "nft_addr",
        type: "felt",
      },
      {
        name: "nft_id",
        type: "felt",
      },
      {
        name: "l1_claimer",
        type: "felt",
      },
    ],
    name: "claim_nft",
    outputs: [],
    type: "function",
  },
  {
    inputs: [
      {
        name: "from_address",
        type: "felt",
      },
      {
        name: "nft_addr",
        type: "felt",
      },
      {
        name: "nft_id",
        type: "felt",
      },
      {
        name: "reserve_price",
        type: "felt",
      },
      {
        name: "deadline",
        type: "felt",
      },
    ],
    name: "put_on_auction",
    outputs: [],
    type: "l1_handler",
  },
  {
    inputs: [
      {
        name: "from_address",
        type: "felt",
      },
      {
        name: "nft_addr",
        type: "felt",
      },
      {
        name: "nft_id",
        type: "felt",
      },
    ],
    name: "stop_auction",
    outputs: [],
    type: "l1_handler",
  },
];
