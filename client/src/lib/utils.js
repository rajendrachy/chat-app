export function fromateMessageTime(data) {
  return new Date(data).toLocaleTimeString("en-US", {
    hour: '2-digit',
    minute: "2-digit",
    hour12: true,
  })
}
