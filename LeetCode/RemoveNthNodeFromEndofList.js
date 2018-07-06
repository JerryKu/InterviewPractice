/* Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5. */
var removeNthFromEnd = function(head, n) {
    if(head === null) return head;
    let slow = head;
    let fast = head;

    for(let i = 0; i < n; i++){
        fast = fast.next;
    }
    if(fast == null){
        head = head.next;
        return head;
    }
    while(fast.next !== null){
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next || null;
    return head;
};
