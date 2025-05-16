let adasheContribution = [];

    function addNewMember(name, amount) {
      let memberExists = false;
      for (let i = 0; i < adasheContribution.length; i++) {
        if (adasheContribution[i].name.toLowerCase() === name.toLowerCase()) {
          adasheContribution[i].amount += amount;
          memberExists = true;
          break;
        }
      }
      if (!memberExists) {
        adasheContribution.push({ name: name, amount: amount });
      }
    }

    function handleAddMember() {
      const nameInput = document.getElementById("memberName");
      const amountInput = document.getElementById("contributionAmount");
      const name = nameInput.value.trim();
      const amount = parseFloat(amountInput.value);

      if (name && amount && amount > 0) {
        addNewMember(name, amount);
        nameInput.value = "";
        amountInput.value = "";
        renderMembers();
      }
    }

    function renderMembers() {
      const list = document.getElementById("memberList");
      list.innerHTML = "";
      adasheContribution.forEach(member => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td class="capitalize">${member.name}</td>
          <td class="text-right text-green">${member.amount.toLocaleString()}</td>
        `;
        list.appendChild(row);
      });
    }
    [
      ["Promise", 2000], ["Josephine", 5000], ["Dan", 100],
      ["Josiah", 3000], ["Maria", 2000], ["Yakubu", 1200],
      ["Zara", 1700], ["Tobi", 1350], ["Isaac", 2300],
      ["Dan", 2000], ["Yakubu", 1800], ["Maria", 1000],
      ["Tobi", 650], ["Josiah", 2000], ["Yakubu", 1200]
    ].forEach(([name, amount]) => addNewMember(name, amount));

    renderMembers();
 


