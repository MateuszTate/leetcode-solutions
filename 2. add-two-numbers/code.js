function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0);
    let curr = dummyHead;
    let carry = 0;

    while (l1 !== null || l2 !== null) {
        let sum = carry;

        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }

        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }

        carry = Math.floor(sum / 10);
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
    }

    if (carry > 0) {
        curr.next = new ListNode(carry);
    }

    return dummyHead.next;
};



console.log(addTwoNumbers([2,4,3],[5,6,4]));