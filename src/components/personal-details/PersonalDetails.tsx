import React from 'react';
import {
  Container,
  Name,
  Phone,
  Email,
  GitHub,
} from './PersonalDetails.styles';
import PhoneLogo from './icons/PhoneLogo';
import EmailLogo from './icons/EmailLogo';
import GitHubLogo from './icons/GitHubLogo';

const PersonalDetails = () => {
  return (
    <Container>
      <Name>Dan Negrusa - Web developer</Name>
      <Phone href='tel:07440153327'>
        <PhoneLogo />
        07440153327
      </Phone>
      <Email href='mailto:negrusadan95@gmail.com'>
        <EmailLogo />
        negrusadan95@gmail.com
      </Email>
      <GitHub href='https://github.com/ngdan/' target='_blank'>
        <GitHubLogo />
        github.com/ngdan
      </GitHub>
    </Container>
  );
};
export default PersonalDetails;
