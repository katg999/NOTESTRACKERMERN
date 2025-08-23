// utils/WalletGenerator.js
import Donation from '../models/Donation.js';
import axios from 'axios';

class WalletGenerator {
  static async listenBTC() {
    const pendingDonations = await Donation.find({ cryptoType: 'BTC', status: 'pending' });

    for (const donation of pendingDonations) {
      // Using Blockstream API as an example
      const url = `https://blockstream.info/api/address/${donation.address}`;
      const { data } = await axios.get(url);

      if (data.chain_stats.funded_txo_sum > 0) {
        donation.status = 'received';
        donation.txnHash = data.chain_stats.tx_count;
        await donation.save();

        console.log(`BTC Donation received at ${donation.address}`);
      }
    }
  }

  static async listenETH(provider) {
    const pendingDonations = await Donation.find({ cryptoType: 'ETH', status: 'pending' });

    for (const donation of pendingDonations) {
      const balance = await provider.getBalance(donation.address);
      if (balance.gt(0)) {
        donation.status = 'received';
        donation.amount = ethers.utils.formatEther(balance);
        await donation.save();

        console.log(`ETH Donation received at ${donation.address}`);
      }
    }
  }
}

export default WalletGenerator;
