var BASE_URL = "http://localhost:8081/docservice";

export async function addNewpaySlip(data) {
  console.log("letter data in service : ", JSON.stringify(data));
  try {
    const response = await fetch(BASE_URL + "/add-payslip", {
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify(data),

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

export async function getAllPayslips() {
  try {
    const response = await fetch(BASE_URL + "/payslips", {
      method: "GET",
      // Adding headers to the request
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      return response.json();
    } else {
      return response
        .status(500)
        .send({ error: "Error loading payslips list" });
    }
  } catch (error) {
    let responseTxt = await error.text();
    return responseTxt;
  }
}

export async function getPayslipById(id) {
  try {
    const response = await fetch(BASE_URL + "/payslip/" + id, {
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

export async function updatePayslipById(id, updatedData) {
  console.log("Updated Payslip  data: ", JSON.stringify(updatedData));
  try {
    const response = await fetch(BASE_URL + "/edit-payslip/" + id, {
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

export async function removePayslipById(id) {
  try {
    const response = await fetch(BASE_URL + "/remove-payslip/" + id, {
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
