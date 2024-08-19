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
<img src="images/homepage.png" width=20% height=20%>
<img src="images/products.png" width=20% height=20%>
<img src="images/scan.png" width=20% height=20%>
<img src="images/track.png" width=20% height=20%>
