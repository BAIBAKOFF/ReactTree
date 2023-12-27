
export function createOrgChartNode(data, logo) {

    const companyInfo = data.rootEntity.info


    const companyName = companyInfo.name;
    const countryCode = companyInfo.countryCode;
    const registrationCode = companyInfo.registrationCode;
    const peopleNames = data.entities.map(name => name.info.name).slice(1);
    const currency = data.entities.map(info => info.info.share.currency).slice(1);
    const percentage = data.entities.map(info => info.info.share.percentage).slice(1);
    const size = data.entities.map(info => info.info.share.size).slice(1);
    const type = data.entities.map(info => info.info.share.type).slice(1);
    const role = data.entities.map(info => info.relation[0].info.roles).slice(1);
    console.log(role)

    const children = [];

    for (let i = 0; i < peopleNames.length; i++) {
        const relatedEntity = peopleNames[i];
        const roles = role[i];
        const curren = currency[i];
        const percent = percentage[i];
        const sizee = size[i];
        const typee = type[i];

        const childNode = {
            name: `Name: ${relatedEntity}`,
            role: `${roles ? `${roles}` : ''}`,
            size: `${sizee ? `${sizee} ${curren}` : ''}`,
            percents: `${percent ? `${percent}` : ''}`,
            type: `${typee ? `${typee}` : ''}`
        };

        children.push(childNode);
    }


    return {
        companyName: `Company name: ${companyName}`,
        description: `Registration Code: ${registrationCode}`,
        country: `Country: ${countryCode}`,
        logo: `${logo}`,
        children: children.length > 0 ? children : undefined
    };

}

