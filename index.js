function superbowlWin(records) {
    if (!Array.isArray(records)) {
      console.error("Invalid input: records must be an array.");
      return undefined;
    }
    const winningRecord = records.find(record => record && record.result === "W");
  }
  