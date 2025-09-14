import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface StatusBadgeProps {
  status: "pending" | "confirmed" | "cancelled" | "completed"
  className?: string
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const statusConfig = {
    pending: { label: "Pending", className: "status-pending" },
    confirmed: { label: "Confirmed", className: "status-confirmed" },
    cancelled: { label: "Cancelled", className: "status-cancelled" },
    completed: { label: "Completed", className: "status-completed" },
  }

  const config = statusConfig[status]

  return <Badge className={cn(config.className, "border", className)}>{config.label}</Badge>
}
