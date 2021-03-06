import { BigNumber } from "ethers";

export class NFT {
  seller: string;
  nftAdress: string;
  tokenId: BigNumber;
  startingPrice: BigNumber;
  endTime: BigNumber;
  uri?: string;
  desc?: string;

  constructor({
    seller,
    nftAddress,
    tokenId,
    startingPrice,
    endTime,
    uri,
    desc,
  }: {
    seller: string;
    nftAddress: string;
    tokenId: BigNumber;
    startingPrice: BigNumber;
    endTime: BigNumber;
    uri?: string;
    desc?: string;
  }) {
    this.seller = seller;
    this.nftAdress = nftAddress;
    this.tokenId = tokenId;
    this.startingPrice = startingPrice;
    this.endTime = endTime;
    this.uri = uri;
    this.desc = desc;
  }
}
