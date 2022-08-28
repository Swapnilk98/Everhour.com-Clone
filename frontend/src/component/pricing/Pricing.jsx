import React from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Input,
  ListItem,
  Select,
  Stack,
  UnorderedList,
} from '@chakra-ui/react';
// import { MdCheckCircle } from '@chakra-ui/icons';
import '../Signup/signup.css';
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';
const Pricing = () => {
  const [monthyear, setMonthyear] = useState(false);

  return (
    <Box className="main_login">
      <Box className="page1_top">
        <Box className="background">
          <Box
            className="background_left"
            marginTop="10rem"
            textAlign="right"
            display="none"
          ></Box>
          <Box
            className="background_left_top"
            marginTop="10rem"
            marginLeft="12rem"
          ></Box>
          <Box className="background_right-pricing" marginTop="5rem"></Box>
        </Box>
        <Box
          fontSize="3rem"
          marginTop="-6rem"
          fontFamily="geomanist-regular sans-serif"
          fontWeight="bold"
        >
          Simple pricing with no extra fees
        </Box>
        <Box fontSize="1.5rem" color="gray.600">
          Start with no commitment. Try everything. Subscribe if you love it.
        </Box>
        <Box textAlign="center" marginTop="1.5rem">
          <Button
            colorScheme="teal"
            size="xs"
            borderRadius="none"
            background="whiteAlpha.500"
            color="gray.500"
            onClick={(e) => setMonthyear(false)}
          >
            Monthly
          </Button>
          <Button
            colorScheme="teal"
            size="xs"
            borderRadius="none"
            color="gray.500"
            background="whiteAlpha.500"
            onClick={(e) => setMonthyear(true)}
          >
            Yearly
          </Button>
        </Box>
      </Box>

      <Box className="pricing_box" marginBottom="5rem">
        <Box
          className="pricing_content"
          borderTop="2px solid #57bb71"
          marginTop="-.7rem"
          paddingTop="1.5rem"
        >
          <Box className="pricing_header">
            <Box className="pricing_title">Team plan</Box>
            <Box className="pricing_subtitle">
              All features, plus best-in-class integrations
            </Box>
          </Box>
          <Box marginBottom="2rem">
            <Box className="pricing_ammount">
              <span style={{ fontSize: '20px' }}>&#8377;</span>{' '}
              {monthyear ? 799 : 679}{' '}
              <span
                style={{
                  fontSize: '20px',
                  marginLeft: '-1rem',
                  fontWeight: '200',
                }}
              >
                {monthyear ? '.16' : '.02'}
              </span>
            </Box>
            <Box
              className="pricing_ammount-label"
              colorSchema="gray.500"
              fontWeight="400"
            >
              / user / month, starting at{' '}
              <Box display="inline-block" color="gray">
                5 users
              </Box>
            </Box>
          </Box>
          <Box className="pricing_list" fontWeight="400" color="gray">
            <UnorderedList>
              <ListItem>Unlimited users</ListItem>
              <ListItem>Unlimited projects and clients</ListItem>
              <ListItem>Track time inside most popular tools →</ListItem>
              <ListItem>Optional screenshots</ListItem>
              <ListItem>Customizable reports</ListItem>
              <ListItem>Schedule reports by email</ListItem>
              <ListItem>Lock time entries at certain rules</ListItem>
              <ListItem>Time tracking reminders</ListItem>
              <ListItem>Time approval</ListItem>
              <ListItem>Single sign-on (SSO)</ListItem>
              <ListItem>Budget & estimates</ListItem>
              <ListItem>Manage billable rates and labor costs</ListItem>
              <ListItem>Expenses</ListItem>
              <ListItem>Scheduling</ListItem>
              <ListItem>Invoicing</ListItem>
              <ListItem>Time off</ListItem>
              <ListItem>Fast and responsive support</ListItem>
              <ListItem>API</ListItem>
            </UnorderedList>
          </Box>
        </Box>
      </Box>
      <Box textAlign="center" marginBottom="5rem">
        <Box display="inline-block" color="gray.500">
          {' '}
          Currency
        </Box>

        <Select
          className="currency_drop"
          placeholder="INR"
          width="100px"
          display="inline-block"
          border="none"
          cursor="pointer"
        >
          <option value="INR">INR</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="AUD">AUD</option>
          <option value="CAD">CAD</option>
          <option value="RUB">RUB</option>
          <option value="PLN">PLN</option>
        </Select>
      </Box>
      <Box className="pricing_bottom">
        <Box>
          <Box className="login_right-content">
            <Box className="right_header" fontSize="2.5rem" fontWei>
              Your questions. Answered!
            </Box>
            <Box
              fontWight="500"
              marginRight="7rem"
              color="gray.500"
              fontSize="1.1rem"
            >
              Here is a list of the most frequently asked questions. Got others
              or some ideas? —<Box className="right_links">Learn more</Box>
            </Box>
          </Box>
          <Box>
            <img
              src="https://blog-cdn.everhour.com/assets/images/new-design/illustrations/primary-illustrations/faq.webp"
              alt="png_img"
            />
          </Box>
        </Box>
        <Box>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontSize="1.2rem"
                    fontWeight="500"
                    padding=".8rem"
                  >
                    What means 'Starting at 5 users'?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                When you sign up, you get a fully-functional account for 2
                weeks, which gives you access to everything Everhour has to
                offer. After 14 days, you will need to pick a plan and enter
                your credit card details. We’ll email you a couple of days
                before your trial expires to remind you. Read more →
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontSize="1.2rem"
                    fontWeight="500"
                    padding=".8rem"
                  >
                    What means 'Starting at 5 users'?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                This is kind of a basic usage fee. You can subscribe even if you
                have fewer than 5 users, however, in this case, the minimum
                usage fee will apply. So it's either $50/month on a
                month-to-month basis or $42.5/month billed in advance on a
                yearly basis.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontSize="1.2rem"
                    fontWeight="500"
                    padding=".8rem"
                  >
                    Can I change my plan later?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Yes, you can upgrade/downgrade your plan at any time. You will
                be credited for the remainder of your current plan and charged
                for your new plan when you upgrade. Read more →
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontSize="1.2rem"
                    fontWeight="500"
                    padding=".8rem"
                  >
                    Can I add or remove members at any time?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Absolutely! Everhour is pay-as-you-go, and you can easily add or
                remove members from your account with a couple of clicks. Read
                more →
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontSize="1.2rem"
                    fontWeight="500"
                    padding=".8rem"
                  >
                    What if I want to cancel my service?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                No problem. If you decide Everhour isn’t for you (or you just
                need to pause), simply cancel before your next billing period.
                This date is listed on your billing page. Unfortunately, we
                can’t refund you for partial use or the amount of time left in
                your subscription. Read more →
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontSize="1.2rem"
                    fontWeight="500"
                    padding=".8rem"
                  >
                    What kind of payment methods do you accept?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                We currently accept any credit or debit card with a MasterCard,
                Visa, Discover Network, American Express, Diners Club
                International or JCB logo.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontSize="1.2rem"
                    fontWeight="500"
                    padding=".8rem"
                  >
                    Which currency will I be charged in?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                We charge you in US dollars. However, the debit currency depends
                on your card and your bank.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Box>
      <Box className="pricing_bottom-form">
        <Box marginBottom="5rem" textAlign="left">
          <Box
            fontSize="2rem"
            fontFamily="geomanist-regular sans-serif"
            fontWeight="bold"
          >
            Take control of your time with Everhour
          </Box>
          <Box fontSize="1.2rem" color="gray">
            Beautiful integrations. Intuitive interface. No unexpected fees
          </Box>
          <Box>
            <Box margin={5} textAlign="left">
              <Input
                placeholder="Work Email..."
                size="md"
                width={300}
                borderColor="gray.600"
                p={5}
                padding={6}
                paddingBottom="-1rem"
                marginRight={5}
              />
              <Button
                colorScheme="green"
                size="lg"
                width="10rem"
                marginTop="-.4rem"
              >
                Try it free
              </Button>
            </Box>
            <Box>
              <Button
                className="email_btn"
                colorScheme="white"
                border="none"
                width="329px"
                leftIcon={<FcGoogle fontSize="1.5rem" />}
              >
                <Box className="login_endbtn" color="gray">
                  {' '}
                  Or Sign up with google account
                </Box>
              </Button>
            </Box>
          </Box>
        </Box>
        <Box>
          <UnorderedList fontSize="1.2rem" fontWeight="400">
            <ListItem>Track time from the apps you already use</ListItem>
            <ListItem>Know where your team’s time is going</ListItem>
            <ListItem>Keep projects on budget</ListItem>
            <ListItem>Increase transparency</ListItem>
            <ListItem>Make your workflow more efficient</ListItem>
            <ListItem>Spot burnout before it happens</ListItem>
          </UnorderedList>
        </Box>
      </Box>
    </Box>
  );
};

export default Pricing;

{
  /* <Box className="login_right-content">
              <Box className="right_header">Integration with Todoist</Box>
              <Box>
                Everhour now integrates with Todoist!{' '}
                <Box className="right_links">Learn more</Box>
              </Box>
            </Box> */
}
