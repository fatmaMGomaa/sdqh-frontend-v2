import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getLocalStorageItem } from "../../util/localStorage";

const UserProfile = () => {
  const user = getLocalStorageItem("user");

  return (
    <div>
      {user.firstName} {user.lastName}
    </div>
  )
}

export default UserProfile
