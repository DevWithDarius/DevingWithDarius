# Secure AWS Web App Deployment

## Overview

This project demonstrates the deployment of a secure, scalable web application on AWS, utilizing best practices from both the **AWS Solutions Architect** and **CompTIA Security+** certifications. The application is deployed using **EC2**, **Application Load Balancer (ALB)**, **Virtual Private Cloud (VPC)**, and **IAM** security policies to ensure a robust, secure infrastructure.

The project is fully operational, running with HTTPS encryption, CloudWatch logging, and input validation via AWS WAF. It includes a secure web app that is accessible through a custom domain name, **DevWithDarius.us**.

## Key Features

- **EC2 Instance**: The application is hosted on an EC2 instance running a web server.
- **Application Load Balancer (ALB)**: Distributes incoming traffic to ensure high availability and scalability.
- **HTTPS**: SSL/TLS encryption is implemented using an Application Load Balancer, ensuring secure communication between clients and the web server.
- **VPC & Subnets**: The web app is hosted within a secure VPC with appropriate public and private subnets to isolate the EC2 instances.
- **IAM Security**: Followed Security+ principles such as least privilege access with IAM roles and policies for secure access to AWS resources.
- **AWS WAF**: Input validation is performed using AWS Web Application Firewall (WAF) to protect the app from common web exploits.
- **Logging with CloudWatch**: All activities are logged to Amazon CloudWatch for monitoring and auditing purposes.
- **Custom Domain**: The application is accessible through a custom domain, **DevWithDarius.us**, configured with Route 53.
  
## Architecture Diagram

![Architecture](path/to/architecture-diagram.png)

## Technologies Used

- **Amazon Web Services (AWS)**:
  - **EC2** (Elastic Compute Cloud)
  - **VPC** (Virtual Private Cloud)
  - **ALB** (Application Load Balancer)
  - **IAM** (Identity and Access Management)
  - **Route 53** (Domain Name System)
  - **WAF** (Web Application Firewall)
  - **CloudWatch** (Monitoring and Logging)
  
- **Web Technologies**:
  - HTML
  - Apache/Nginx (for the web server)

## Setup Instructions

### Prerequisites:
- **AWS Account**: Set up your AWS account and configure AWS CLI if needed.
- **Domain Name**: Register a domain through Route 53 (or any other DNS provider) and link it to your Load Balancer.

### Steps:
1. **Launch an EC2 instance** in a public subnet of a VPC.
2. **Set up a Web Server** (Apache/Nginx) on the EC2 instance and host your web application.
3. **Create and Configure an ALB**:
   - Associate the EC2 instance with the ALB.
   - Ensure that the ALB is configured with HTTP (port 80) and HTTPS (port 443).
4. **Configure SSL/TLS Encryption**: Set up an SSL certificate using AWS ACM (AWS Certificate Manager) to enable HTTPS.
5. **Set up CloudWatch for Logging**: Enable logging to CloudWatch for monitoring the application.
6. **Configure AWS WAF**: Implement input validation using AWS WAF to prevent common web threats.
7. **Set up DNS with Route 53**: Configure your domain name to point to the ALB via Route 53.

### Optional Enhancements:
- **Autoscaling**: Configure auto-scaling for EC2 instances based on traffic.
- **Database**: Integrate an RDS (Relational Database Service) for dynamic content storage.
- **CI/CD**: Implement a CI/CD pipeline using AWS CodePipeline for automated deployments.

## Deployment

To deploy the application:

1. Clone this repository:

   ```bash
   git clone https://github.com/DevWithDarius/DevingWithDarius.git
 
2.  Follow the setup instructions to launch the EC2 instance and configure the resources.

3. After the setup is complete, you can access your web application through the custom domain name: DevWithDarius.us.
Contributing
If you’d like to contribute, feel free to fork the repository and submit a pull request. You can contribute by adding features, fixing bugs, or improving documentation.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Contact
GitHub: https://github.com/DevWithDarius

Email: darius@example.com

Website: DevWithDarius.us

---

### **Key Sections in the README:**
1. **Overview**: A brief description of the project and what it achieves.
2. **Key Features**: Highlights the main features and AWS services used.
3. **Architecture Diagram**: If you have a diagram of your setup, this is where you’d include it.
4. **Technologies Used**: Lists the AWS services and any web technologies involved.
5. **Setup Instructions**: Step-by-step guide to deploying the web app.
6. **Deployment**: Instructions to deploy and test the web app.
7. **Contributing**: How others can contribute to the project.
8. **License**: Details on how this project is licensed.
9. **Contact**: Your GitHub, email, and project website for anyone who wants to reach out.

---

Once you’ve added the README to your project on GitHub, it’ll provide clear instructions for anyone viewing your repo and make your project look polished and professional!

Let me know if you need any additional changes or have questions!
