import { graphConfig } from "../utils/authConfig";
import constants from "../utils/constants";
import session from "../utils/session";


export async function getACLByMSGraph(accessToken, userId) {
    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;
    headers.append("Authorization", bearer);
    headers.append("ConsistencyLevel", "eventual");
    headers.append("Content-Type", "application/json");

    const groupIds = [
        import.meta.env.VITE_REACT_APP_SAMPLE_ACL_OID,
    ].filter(groupId => groupId && groupId.trim() !== '');

    const body = JSON.stringify({
        groupIds: groupIds
    });

    const options = {
        method: "POST",
        headers: headers,
        body: body,
    };


    const graphAPI = graphConfig.graphDomain + graphConfig.graphParams;

    try {
        const response = await fetch(graphAPI, options);
        if (!response.ok) {
            throw new Error(`callMsGraph HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.value;
    } catch (error) {
        console.error("Error calling Microsoft Graph API:", error);
        throw error;
    }

}
export async function setUserCountry(accessToken) {
    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;

    headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        headers: headers,
    };

    return await fetch("https://graph.microsoft.com/v1.0/me/country", options)
        .then((response) => response.json())
        .then((response) => {
            session.set(constants.cookie.countryKey, response && response.value ? response.value : "unknown");
        })
        .catch((error) => console.error(error));
}

export async function setUserSegment(accessToken) {
    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;

    headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        headers: headers,
    };

    return await fetch("https://graph.microsoft.com/v1.0/me/onPremisesExtensionAttributes/extensionAttribute13", options)
        .then((response) => response.json())
        .then((response) => {
            session.set(constants.cookie.segmentKey, response && response.value ? response.value : "unknown");
        })
        .catch((error) => console.error(error));
}

export async function setUserDepartment(accessToken) {
    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;

    headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        headers: headers,
    };

    return await fetch("https://graph.microsoft.com/v1.0/me/department", options)
        .then((response) => response.json())
        .then((response) => {
            session.set(constants.cookie.departmentNameKey, response && response.value ? response.value : "unknown");
        })
        .catch((error) => console.error(error));
}

export async function setUserJobTitle(accessToken) {
    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;

    headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        headers: headers,
    };

    return await fetch("https://graph.microsoft.com/v1.0/me", options)
        .then((response) => response.json())
        .then((response) => {
            session.set(constants.cookie.jobTitleKey, response && response.jobTitle ? response.jobTitle : "unknown");
            session.set(constants.cookie.userPrincipalNameKey, response && response.userPrincipalName ? response.userPrincipalName : "unknown");
        })
        .catch((error) => console.error(error));
}
