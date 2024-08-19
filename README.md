# VeriTrace
React Native app for product tracking and authentication via RFID chips and the Hyperledger Fabric blockchain.

Technologies used:
- React Native
- `react-native-nfc-manager`
- Amazon Web Services (Lambda function, Amazon Managed Secrets, Amazon Managed Blockchain)


1) User scans RFID chip-embedded product using the VeriTrace mobile app
2) Scan event triggers API call to Lambda to find transactions related to the scanned product
3) Lambda retrieves credentials from AWS Secrets Manager and queries product data from the HyperLedger Fabric blockchain.
4) Lambda then returns the query response from the blockchain network to VeriTrace. <br> <br>

<p align="center">
![homepage](https://github.com/user-attachments/assets/a344f86f-561b-4647-9c8a-551301f9325a)
![products](https://github.com/user-attachments/assets/c5c6f2fe-dd68-492f-87dd-0acc5e3f0357)
![scan](https://github.com/user-attachments/assets/70cf37dd-660e-405c-8733-6b5086c358eb)
![track](https://github.com/user-attachments/assets/7c990f4a-28f2-44b1-ad94-c68e2bcaa6f3)
