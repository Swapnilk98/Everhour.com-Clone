import React from 'react';
import './signup.css';
import { Button, Input } from '@chakra-ui/react';
// import {
//   BsFillExclamationSquareFill,
//   BsFillEnvelopeFill,
// } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';

const SignUp = () => {
  return (
    <div className="main_signup">
      <div className="page1_top">
        <div className="background">
          <div className="background_left"></div>
          <div className="background_left_top"></div>
          <div className="background_right"></div>
        </div>
        <div className="page1_content">
          <div className="top">
            <h1>Make your team more productive with Everhour</h1>
            <div className="subtitle">
              Join 3,500+ customers who use Everhour to track time and plan
              their future projects more effectively
            </div>
          </div>
          <div>
            <Button
              className="email_btn"
              p="20px"
              colorScheme="facebook"
              leftIcon={<FcGoogle fontSize="2rem" color="white" />}
            >
              <span style={{ margin: '0px auto 0px auto' }}>
                {' '}
                Sign up with google
              </span>
            </Button>
          </div>
          <div style={{ margin: '1rem' }}>or</div>
          <div>
            <Input
              placeholder="work Email ..."
              size="md"
              width={300}
              borderColor="gray.600"
              p={6}
            />
          </div>
          <div style={{ marginTop: '1.5rem' }}>
            <Button colorScheme="teal" size="lg">
              GET STARTED
            </Button>
          </div>
        </div>
      </div>
      <div className="page1_bottom">
        <div className="grids">
          <div>
            “I am the owner of the company, and I use Everhour for timekeeping
            of myself and my subcontractors. All team members use the system -
            from web developers to tech support to project management to
            design.” <span>— Jennifer H. (Source: TrustRadius)</span>
          </div>
          <div>
            “Everhour is being used by my department now, but it’s planned to be
            used across the whole company. We were having problems tracking the
            times of every project and Everhour ended up being the best solution
            to the issue. We’re tracking our tasks involved in every project, in
            every level (software development, meetings, project management,
            etc.)” <span>— Maria Lucia S. (Source: TrustRadius)</span>
          </div>
          <div>
            “Everhour helps me manage/plan my weekly activities a lot more
            effectively, since I know how much time I have to work on things
            each day, and can quickly update estimated times to reallocate tasks
            as needed.”<span>— Dan S. (Source: Capterra)</span>
          </div>
          <div>
            “We are using Everhour as a core business software, because our
            business is to sell our time. When you use such software, what you
            care about the most is speed, flexibility, ability to integrate with
            all major project management software. And Everhour is exactly that
            kind of software”
            <br /> <span>— Ivan M. (Source: G2Crowd)</span>
          </div>
          <div>
            “We are a 15 people team working remotely from different cities of
            Latin America and Europe, and time tracking for each client,
            project, and task has always been a major issue, and it has become
            an essential tool for our team. It does not only give us the ability
            to track how much time we have dedicated to a project but also to
            estimate how much time a particular task will need in order to be
            completed next time and by who. Easily create and save reports with
            just a few clicks” <span>— Daniel Y. (Source: TrustRadius)</span>
          </div>
          <div>
            “The most important gain from using Everhour is that we can track
            our tasks in real-time without having to leave the browser. The
            Chrome add-on helps us initiate the time for a specific task. If we
            are already on Asana, a simple click does the job.”
            <span> — Dimitris R. (Source: Capterra)</span>
          </div>
          <div>
            “Everhour’s integration with Asana is wonderful for a remote team.
            We track all activities in Asana, but before Everhour I often
            wondered how long it was taking to do a task, now I know exactly. I
            can see who is working right now and a summary each day”.
            <span>— Doug H. (Source: G2Crowd)</span>
          </div>
          <div>
            “Everhour has already paid for itself for the year by helping me
            track time I was missing in client projects. It is easy to use, has
            friendly customer service people, and the reports make it easy to
            invoice clients and track projects.”
            <span>— Jennifer D. (Source: TrustRadius)</span>
          </div>
        </div>
        <div style={{ marginTop: '1.5rem' }}>
          <Button colorScheme="teal" size="lg">
            READ MORE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
