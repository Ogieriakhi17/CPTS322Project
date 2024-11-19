# Sprint 2 Report 
Video Link: https://youtu.be/kATYYEXwnFE
## What's New (User Facing)
 * Sign Up and Login page properly implemented
 * Program dashboard being implemented
 

## Work Summary (Developer Facing)
This sprint, our team focused on implementing the backend functionality for user authentication and generating travel itineraries. For the authentication system, we developed and tested RESTful endpoints to support user signup and login, securely managing user credentials with hashed passwords and JWT-based session management. Transitioning to the itinerary generation, we integrated the OpenAI API to create a dynamic content generation feature. A key challenge we overcame was adapting to updates in the OpenAI library, which required revising our implementation to use the latest `ChatGPT` API functions. Significant learnings included improving our debugging processes for external API integration and enhancing our understanding of secure credential management, such as handling API keys with environment variables to avoid accidental exposure. These accomplishments strengthened our team's backend development and problem-solving skills.

## Unfinished Work
Our team was unable to implement the itinerary modification functionality this sprint due to the unexpected time demands of debugging the login and OpenAI generation functionalities. Addressing integration issues and ensuring the reliability of these critical backend components required significant effort, leaving insufficient time for the modification feature. We aim to prioritize this in the next sprint to enhance user customization capabilities.

## Completed Issues/User Stories
Here are links to the issues that we completed in this sprint:

 * https://github.com/users/Ogieriakhi17/projects/4?pane=issue&itemId=84744015&issue=Ogieriakhi17%7CCPTS322Project%7C8
 * https://github.com/users/Ogieriakhi17/projects/4?pane=issue&itemId=83688654&issue=Ogieriakhi17%7CCPTS322Project%7C5
 * https://github.com/users/Ogieriakhi17/projects/4/views/1?pane=issue&itemId=84743819&issue=Ogieriakhi17%7CCPTS322Project%7C7

 
 ## Incomplete Issues/User Stories
 Here are links to issues we worked on but did not complete in this sprint:
 
 * https://github.com/users/Ogieriakhi17/projects/4/views/1?pane=issue&itemId=84744179 <<Our team could not implement the itinerary modification functionality this sprint due to the time-intensive debugging of login and generation features.>>

 


## Code Files for Review
Please review the following code files, which were actively developed during this sprint, for quality:
 * authorization directory (https://github.com/Ogieriakhi17/CPTS322Project/tree/main/TravelBuddy/backend/auth)
 * OpenAI_api client(https://github.com/Ogieriakhi17/CPTS322Project/blob/main/TravelBuddy/backend/api/openai_client.py)
 
 
## Retrospective Summary
Here's what went well:
  * Implemented Core Backend Features: Successfully developed the signup and login system with secure password hashing and JWT session management, ensuring a smooth user experience.
  * Seamless Integration with OpenAI API: Designed and tested the functionality for generating personalized travel itineraries using OpenAI's API, leveraging advanced AI capabilities to enhance user engagement.
  * Effective Collaboration and Debugging: The team worked cohesively to resolve critical issues, such as adapting to updates in the OpenAI library and implementing best practices for managing sensitive credentials.
 
Here's what we'd like to improve:
   * Streamline Testing Processes: Improve test coverage and automate test cases to ensure the reliability of new features, especially when integrating third-party APIs.
   * Enhance Documentation: Provide more detailed documentation for backend modules to facilitate onboarding for new team members and future maintainability.
   * Optimize OpenAI Integration: Fine-tune the prompts and API usage to ensure that itineraries generated are consistent with user preferences and free of generic content.
  
Here are changes we plan to implement in the next sprint:
   * Front-End Integration: Connect the backend with the front-end to enable users to access signup, login, and itinerary generation features seamlessly.
   * Database Enhancements: Set up a database for storing user preferences, profiles, and generated itineraries for persistent and personalized experiences.
   * Modifying generated itineraries Functionality : Implement the functionality allowing the user modify the created itineraries.
   
