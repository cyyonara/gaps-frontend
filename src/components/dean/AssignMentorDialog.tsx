import { useState } from "react";
import { mentorSchema } from "@/helpers/validations";
import { useForm, Controller } from "react-hook-form";
import { CiSearch, CiCalendarDate } from "react-icons/ci";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { zodResolver } from "@hookform/resolvers/zod";

const mentors = [
  { id: 1, name: "Alice Johnson" },
  { id: 2, name: "Bob Smith" },
  { id: 3, name: "Charlie Davis" },
];

export default function AssignMentorDialog() {
  const {
    watch,
    setValue,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(mentorSchema),
    defaultValues: {
      mentor: "",
      date: undefined as Date | undefined,
    },
  });
  const today = new Date();
  const [search, setSearch] = useState("");
  const [filteredMentors, setFilteredMentors] = useState(mentors);
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [open, setOpen] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearch(query);
    setFilteredMentors(
      mentors.filter((mentor) => mentor.name.toLowerCase().includes(query.toLowerCase())),
    );
  };

  const handleSelect = (mentor: { id: number; name: string }) => {
    setSearch(mentor.name);
    setSelectedMentor(mentor);
    setFilteredMentors([]);
  };

  console.log(errors.date?.message);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <DropdownMenuItem
          onSelect={(e) => e.preventDefault()}
          className="text-primary hover:text-primary"
        >
          Assign Mentor
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <DialogHeader>
            <DialogTitle>Assign Mentor</DialogTitle>
            <DialogDescription>Select mentor and date.</DialogDescription>
          </DialogHeader>

          <div className="pt-5 flex flex-col gap-y-5">
            <div className="relative w-full">
              <Label htmlFor="mentor">Select Mentor</Label>
              <div className="flex h-9 w-full rounded-md px-3 border border-input bg-transparent text-base shadow-sm transition-colors justify-between items-center gap-x-2 focus-within:ring-1 focus-within:ring-ring">
                <Input
                  id="mentor"
                  placeholder="Select Mentor"
                  value={search}
                  onChange={handleSearch}
                  className="text-xs w-full h-9 pl-0 ring-0 border-none shadow-none focus-visible:ring-0"
                />
                <CiSearch size={20} />
              </div>
              {errors.mentor && (
                <span className="text-xs text-primary">{errors.mentor.message}</span>
              )}
              {search && filteredMentors.length > 0 ? (
                <Card className="absolute w-full bg-white border mt-1 rounded-md shadow-md z-10">
                  {filteredMentors.map((mentor) => (
                    <div
                      key={mentor.id}
                      onClick={() => handleSelect(mentor)}
                      className="p-2 cursor-pointer hover:bg-gray-100"
                    >
                      <span className="text-xs">{mentor.name}</span>
                    </div>
                  ))}
                </Card>
              ) : (
                search &&
                filteredMentors.length === 0 &&
                !selectedMentor && (
                  <Card className="absolute w-full bg-white border mt-1 rounded-md shadow-md z-10">
                    <div className="p-2 text-xs">No mentors found</div>
                  </Card>
                )
              )}
            </div>

            <div className="flex w-full flex-col gap-y-1">
              <Label htmlFor="date">Select Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-between text-left font-normal",
                      !watch("date") && "text-muted-foreground",
                    )}
                  >
                    {watch("date") ? (
                      format(watch("date") as Date, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                    <CiCalendarDate />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Controller
                    control={control}
                    name="date"
                    render={({ field }) => (
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={(newDate) => {
                          field.onChange(newDate);
                          setValue("date", newDate);
                        }}
                        defaultMonth={today}
                        initialFocus
                      />
                    )}
                  />
                </PopoverContent>
              </Popover>
              {errors.date && <span className="text-xs text-primary">{errors.date.message}</span>}
            </div>
          </div>

          <DialogFooter className="pt-5">
            <Button type="submit" className="bg-primary text-white">
              Assign
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
