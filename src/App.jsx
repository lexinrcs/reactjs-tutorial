import Header from './components/header'
import Home from './pages/home'
import About from './pages/about'
import Services from './pages/services'
import Contact from './pages/contact'
import Footer from './components/footer'

import { useMsal } from "@azure/msal-react";
import { setUserCountry, setUserSegment, setUserJobTitle, setUserDepartment, getACLByMSGraph } from "./Services/MSAL.service";
import session from "./utils/session";
import constants from "./utils/constants.js";
import { loginRequest } from "./utils/authConfig.js";
import { getInitials } from "./utils/utils.js";
import { InteractionStatus } from "@azure/msal-browser";
import { useEffect, useRef, useState } from 'react'
import { UpdateUserACLList } from './services/verifyACL.service.js'

function App() {

	const { instance, accounts, inProgress } = useMsal();
	const [authError, setAuthError] = useState(false);
	const [hasCheckedACL, setHasCheckedACL] = useState(false);

	const userProfile = JSON.parse(JSON.stringify(session.get(constants.cookie.userProfileKey)));
	const hasRunOnce = useRef(false);
	useEffect(() => {
		if (inProgress !== InteractionStatus.None) return;

		if (hasRunOnce.current) return;

		hasRunOnce.current = true;

		let callBackId = null;

		const Authenticate = async () => {
			try {
				const accountExist = accounts.length > 0;
				const profileExists = !!userProfile;
				console.log("Account Exist: ", accountExist);
				if (!instance || hasCheckedACL) return;

				callBackId = instance.addEventCallback((message) => {
					if (message.eventType === "msal:handleRedirectEnd" && !accountExist) {
						session.set(constants.cookie.userProfileKey, false);
						instance.loginRedirect(loginRequest);
					}
				});

				if (accountExist) {
					const response = await instance.acquireTokenSilent({
						...loginRequest,
						account: accounts[0],
					});

					setUserJobTitle(response.accessToken);
					if (!response?.accessToken) {
						session.set(constants.cookie.profileKey, JSON.stringify({ hasAccess: false }));
						return;
					}


					setUserCountry(response.accessToken);
					setUserSegment(response.accessToken);
					setUserJobTitle(response.accessToken);
					setUserDepartment(response.accessToken);
					if (!profileExists) {
						const saveProfile = {
							name: accounts[0].name.split(" ")[0],
							fullName: accounts[0].name,
							initial: getInitials(accounts[0].name),
							userid: accounts[0].localAccountId,
						};
						session.set(constants.cookie.profileKey, JSON.stringify(saveProfile));
					}

					const aclResponse = await getACLByMSGraph(response.accessToken);
					UpdateUserACLList(aclResponse);
					setHasCheckedACL(true);

				}
			}
			catch (error) {
				console.error('Error during authentication:', error);
				alert("Something went wrong during authentication. Please try again later or try to contact administrator.");
				setAuthError(true);
				setHasCheckedACL(true);
			}
		}

		Authenticate();

		return () => {
			if (callBackId) {
				instance.removeEventCallback(callBackId);
			}
		}

	}, [instance, accounts, inProgress]);


	const renderPage = () => {
		return (
			<div className="min-h-screen bg-slate-50 pb-12 text-slate-800 font-ManulifeRegular">
				<Header 
					websiteName="This is my website"
				/>

				{/* Home Section */}
				<Home />

				{/* About Section */}
				<About />

				{/* Services Section */}
				<Services />

				{/* Contact Section */}
				<Contact />

				<Footer />

			</div>
		)
	}

	//Conditional Rendering
	if (authError) {
		return <div className="p-6">Authentication failed. Please retry sign-in.</div>;
	}

	if (accounts.length > 0 && hasCheckedACL) {
		return renderPage();
	}
	return <div className="p-6">Authenticating...</div>;
}

export default App
