# Manning Microservices in .NET

## PART 1: GETTING STARTED WITH MICROSERVICES IN .NET

## 1. MICROSERVICES AT A GLANCE

### 1.1. What is a Microservice?

#### 1.1.1. What is a Microservices Architecture?

#### 1.1.2. Microservice Characteristics

### 1.2. Why Microservices?

#### 1.2.1. Enabling Continuous Delivery

#### 1.2.2. High Level of Maintainability

#### 1.2.3. Resilient and Scalable

#### 1.2.4. The Costs and Downsides of Microservices

#### 1.2.5. Greenfield vs. Brownfield

#### 1.2.6. Code Reuse?

### 1.3. Serving a User Request - An Example of How Microservices Work in Concert

#### 1.3.1. Main Handling of the User Request

#### 1.3.2. Side Effects of the User Request

#### 1.3.3. The Complete Picture

### 1.4. A .NET Microservices Technology Stack

#### 1.4.1. Nancy

#### 1.4.2. OWIN

#### 1.4.3. Setting Up a Development Environment

### 1.5. A Simple Microservices Example

#### 1.5.1. Create an Empty ASP.NET 5 application

#### 1.5.2. Add Nancy to the Projects

#### 1.5.3. a Nancy Module with an Implementation of the Endpoint

#### 1.5.4. Add an OWIN Middleware

### 1.6. Summary

## 2. A BASIC SHOPPING CART MICROSERVICE

### 2.1. Overview of the Shopping Cart Microservice

#### 2.1.1. Components of the Shopping Cart Microservice

### 2.2. Implementing the Shopping Cart Microservice

#### 2.2.1. Creating an Empty Project

#### 2.2.2. The Shopping Cart Microservice's API for other services

#### 2.2.3. Fetching Product Information

#### 2.2.4. Parsing the Products Response

#### 2.2.5. Adding a Failure Handling Policy

#### 2.2.6. Implementing a Basic Event Feed

### 2.3. Running the Code

### 2.4. Summary

## PART 2: BUILDING MICROSERVICES

## 3. IDENTIFYING AND SCOPING MICROSERVICES

### 3.1. The Primary Driver for Scoping Microservices: Business Capabilities

#### 3.1.1. What is a Business Capability?

#### 3.1.2. Identifying Business Capabilities

#### 3.1.3. Example: Point of Sale System

### 3.2. The Secondary Driver for Scoping for Microservices: Supporting Technical Capabilities

#### 3.2.1. What is a Technical Capability?

#### 3.2.2. Examples of Supporting Technical Capabilities

#### 3.2.3. Identifying Technical Capabilities

### 3.3. What to do When the Correct Scope is not Clear?

#### 3.3.1. Sometimes Start a Bit Bigger

#### 3.3.2. Carve Out New Microservices from Existing Microservices

#### 3.3.3. Plan for Carving Out New Microservices Later

### 3.4. Well Scoped Microservices Adhere to the Microservice Characteristics

#### 3.4.1. Primarily Scoping to Business Capabilities Leads to Good Microservices

#### 3.4.2. Secondarily Scoping to Supporting Technical Capability Leads to Good Microservices

### 3.5. Summary

## 4. MICROSERVICE COLLABORATION

### 4.1. Types of Collaboration: Commands, Queries and Events

#### 4.1.1. Commands and Queries: Synchronous Collaboration

#### 4.1.2. Events: Asynchronous Collaboration

#### 4.1.3. Data Formats

### 4.2. Implementing Collaboration

#### 4.2.1. Setting Up a Project for the Loyalty Program Microservice

#### 4.2.2. Implementing Commands and Queries

#### 4.2.3. Implementing Commands with HTTP POST or HTTP PUT

#### 4.2.4. Implementing Queries with HTTP GET

#### 4.2.5. Data Formats

#### 4.2.6. Implementing an Event Based collaboration

### 4.3. Summary

## 5. DATA OWNERSHIP AND DATA STORAGE

### 5.1. Each Microservice has a Data Store

### 5.2. How to Partition your Data Between Microservices?

#### 5.2.1. Rule 1: Data Ownership Follows Business Capabilities

#### 5.2.2. Rule 2: Replicate for Speed and Robustness

#### 5.2.3. Where Does a Microservice Store its Data?

### 5.3. Implementing Data Storage in a Microservice

#### 5.3.1. Storing Data Owned by the Microservice

#### 5.3.2. Storing Events Raised by a Microservice

#### 5.3.3. Setting Cache Headers in Nancy Responses

#### 5.3.4. Reading and Using Cache Headers

### 5.4. Summary

## 6. DESIGN FOR ROBUSTNESS

### 6.1. Expect Failures

#### 6.1.1. Have Good Logs

#### 6.1.2. Roll forward vs Roll back

#### 6.1.3. Do Not Propagate Failures

### 6.2. The Client Side of a Collaboration is Responsible for Robustness

#### 6.2.1. Robustness Pattern: Retry

#### 6.2.2. Robustness Pattern: Circuit Breaker

### 6.3. Implementing Robustness Patterns

#### 6.3.1. Implementing a Fast Paced Retry Strategy with Polly

#### 6.3.2. Implementing a Circuit Breaker with Polly

#### 6.3.3. Implementing a Slow Paced Retry Strategy

#### 6.3.4. Log All Unhandled Exceptions

### 6.4. Summary

## 7. WRITING TESTS FOR MICROSERVICES

### 7.1. What and How to Test

#### 7.1.1. The Test Pyramid: What to Test in a Microservices System

#### 7.1.2. System Level Tests: Testing a Complete Microservices System End-to-End

#### 7.1.3. Service Level Tests: Testing a Microservice From Outside Its Process

#### 7.1.4. Unit Level Tests: Testing Endpoints From Within the Process

### 7.2. Testing Libraries Used: Nancy.Testing and xUnit

#### 7.2.1. Meet Nancy.Testing

#### 7.2.2. Meet xUnit

#### 7.2.3. xUnit and Nancy.Testing working together

### 7.3. Writing Unit Tests Using Nancy.Testing

#### 7.3.1. Setup a Unit Test Project

#### 7.3.2. Use the Browser Object to Unit Test Endpoints

#### 7.3.3. Use Configurable Bootstrapper to Inject Mocks into Endpoints

### 7.4. Writing Service Level Tests

#### 7.4.1. Create Service Level Test Project

#### 7.4.2. Create Mocked Endpoints

#### 7.4.3. Start All Processes of the Microservice Under Test

#### 7.4.4. Execute Test Scenario Against the Microservice Under Test

### 7.5. Summary

### 7.6. Further Reading

## PART 3: OPERATIONALIZING AND REUSING CROSS CUTTING CONCERNS

## 8. INTRODUCING OWIN: WRITING AND TESTING OWIN MIDDLEWARE

### 8.1. Handling Cross Cutting Concerns

### 8.2. The OWIN Pipeline

#### 8.2.1. What Belongs in OWIN and What Belongs in Nancy?

### 8.3. Writing Middleware

#### 8.3.1. Middleware as Lambdas

#### 8.3.2. Middleware Classes

### 8.4. Testing Middleware and Pipelines

### 8.5. Summary

### 8.6. Further Reading

## 9. CROSS CUTTING CONCERNS: MONITORING AND LOGGING

### 9.1. Monitoring Needs in Microservices

### 9.2. Logging Needs in Microservices

#### 9.2.1. Structured Logging with SeriLog

### 9.3. Implementing Monitoring Middleware

### 9.4. Implementing Logging Middleware

#### 9.4.1. Adding a Correlation Tokens to All Log Messages

#### 9.4.2. Adding a Correlation Token to All Outgoing HTTP Requests

#### 9.4.3. Logging Requests and Request Performance

#### 9.4.4. Configuring an OWIN Pipeline with Correlation Token and Logging Middleware

### 9.5. Summary

## 10. SECURING MICROSERVICE TO MICROSERVICE COMMUNICATION

### 10.1. Microservices Security Concerns

#### 10.1.1. Authenticate Users at the Edge

#### 10.1.2. Authorize Users In Microservices

#### 10.1.3. How Much Should Microservices Trust Each Other?

### 10.2. Implementing Secure Microservice to Microservice Communication

#### 10.2.1. Meet IdentityServer

#### 10.2.2. Implementing Authentication With IdentityServer Middleware

#### 10.2.3. Implementing Microservice-to-Microservice Authorization With IdentityServer and Middleware

#### 10.2.4. Implementing User Authorization in Nancy Modules

### 10.3. Summary

## 11. BUILDING A REUSABLE MICROSERVICE PLATFORM

### 11.1. It Should be Quick and Easy to Create a New Microservice

### 11.2. Creating a Reusable Microservice Platform

### 11.3. Packaging and Sharing Middleware with NuGet

#### 11.3.1. Creating a Package with Logging and Monitoring Middleware

#### 11.3.2. Creating a Package with Authorization Middleware

#### 11.3.3. Creating a Package with Rest Client Factory

#### 11.3.4. Using the Microservice Platform in Microservice

### 11.4. Summary

## PART 4: BUILDING APPLICATIONS

## 12. CREATING APPLICATIONS OVER MICROSERVICES

## 13. EVOLVING THE SYSTEM

## APPENDIXES

## APPENDIX A: DEVELOPMENT ENVIRONMENT SETUP

### A.1. Set Up an IDE

#### A.1.1. Visual Studio 2015

#### A.1.2. Visual Studio Code

#### A.1.3. ATOM

### A.2. Set Up DNX

### A.3. Set Up Postman

## APPENDIX B: DEPLOYMENT