var BASE_URL = "http://localhost:8081/docservice";

export async function addNewLetter(letterData) {
  console.log("letter data in service : ", JSON.stringify(letterData));
  try {
    const response = await fetch(BASE_URL + "/add-business-letter", {
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify(letterData),

      // Adding headers to the request
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    if (!response.ok) {
      throw response;
    } else {
      return "ok";
    }
  } catch (error) {
    let responseTxt = await error.text();
    return responseTxt;
  }
}

export async function getAllBusLetters() {
  try {
    const response = await fetch(BASE_URL + "/business-letters", {
      method: "GET",
      // Adding headers to the request
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      return response.json();
    } else {
      return response.status(500).send({ error: "Error loading letter list" });
    }
  } catch (error) {
    let responseTxt = await error.text();
    return responseTxt;
  }
}

export async function getBusLetterById(id) {
  try {
    const response = await fetch(BASE_URL + "/business-letter/" + id, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      return response.json();
    } else {
      return response.status(500).send({ error: "Error loading list" });
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function updateBusLetterById(id, updatedData) {
  console.log("Updated business letter  data: ", JSON.stringify(updatedData));
  try {
    const response = await fetch(BASE_URL + "/edit-business-letter/" + id, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      throw response;
    } else {
      return "ok";
    }
  } catch (error) {
    let responseTxt = await error.text();
    return responseTxt;
  }
}

export async function removeBusLetterById(id) {
  try {
    const response = await fetch(BASE_URL + "/remove-business-letter/" + id, {
      method: "DELETE",

      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw response;
    } else {
      return "ok";
    }
  } catch (error) {
    let responseTxt = await error.text();
    return responseTxt;
  }
}
