const attendee = {
  compid: 0,
  meetid: 0,
};

const getCompanyId = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Getting Company Id");
      resolve(12);
    }, 3000);
  });
};

const getMeetingId = (compid) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Getting Meeting Id");
      attendee.compid = compid;
      resolve(121344);
    }, 2000);
  });
};

const setMettingDetails = (meetid) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Setting Meeting details");
      attendee.meetid = meetid;
      console.log(attendee);
      resolve(attendee);
    }, 1000);
  });
};

// getCompanyId()
//   .then((id) => getMeetingId(id))
//   .then((a) => setMettingDetails());

async function performOps() {
    const companyId = await getCompanyId()
    const meetingId = await getMeetingId(companyId);
    const setMeeting = await setMettingDetails(meetingId);
}

performOps();
