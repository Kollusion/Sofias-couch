"use client";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

import { nailServices } from "@/data/servicesData";
import { useBookingStore } from "@/store/useBookingStore";

export function BookingModal() {
    const { isOpen, toggleModal, closeModal } = useBookingStore();

    const [service, setService] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [comment, setComment] = useState("");

    const [errors, setErrors] = useState<Record<string, string>>({});

    const generateTimeSlots = (duration: number) => {
        const slots: string[] = [];
        const start = 10;
        const end = 20;
        const step = Math.ceil(duration / 60);

        for (let h = start; h < end; h += step) {
            slots.push(`${h.toString().padStart(2, "0")}:00`);
        }
        return slots;
    };

    const currentService = nailServices.find(s => s.id === service);
    const timeSlots = currentService ? generateTimeSlots(currentService.duration) : [];

    const validate = () => {
        const newErrors: Record<string, string> = {};

        if (!service) newErrors.service = "Выберите услугу";
        if (!date) newErrors.date = "Выберите дату";
        if (!time && timeSlots.length > 0) newErrors.time = "Выберите время";
        if (!name.trim()) newErrors.name = "Введите имя";
        if (!phone.trim()) {
            newErrors.phone = "Введите телефон";
        } else {
            const cleanPhone = phone.replace(/\D/g, "");
            if (cleanPhone.length < 11) {
                newErrors.phone = "Некорректный номер";
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            console.log({
                service: nailServices.find(s => s.id === service)?.name,
                date,
                time,
                name,
                phone,
                comment,
            });
            alert("Вы успешно записаны! Мы скоро свяжемся с вами.");
            setService("");
            setDate("");
            setTime("");
            setName("");
            setPhone("");
            setComment("");
            setErrors({});
            closeModal();
        }
    };

    const today = new Date().toISOString().split("T")[0];

    return (
        <Dialog open={isOpen} onOpenChange={toggleModal}>
            <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Запись на маникюр</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="service">Услуга *</Label>
                        <Select value={service} onValueChange={setService}>
                            <SelectTrigger id="service" className="w-full">
                                <SelectValue placeholder="Выберите услугу" />
                            </SelectTrigger>
                            <SelectContent>
                                {nailServices.map((s) => (
                                    <SelectItem key={s.id} value={s.id}>
                                        {s.name} ({s.duration} мин)
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        {errors.service && <p className="text-sm text-destructive">{errors.service}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="date">Дата *</Label>
                        <Input
                            id="date"
                            type="date"
                            value={date}
                            onChange={(e) => {
                                setDate(e.target.value);
                                setTime("");
                            }}
                            min={today}
                        />
                        {errors.date && <p className="text-sm text-destructive">{errors.date}</p>}
                    </div>

                    {date && service && (
                        <div className="space-y-2">
                            <Label htmlFor="time">Время *</Label>
                            <Select value={time} onValueChange={setTime} disabled={!timeSlots.length}>
                                <SelectTrigger id="time">
                                    <SelectValue placeholder={timeSlots.length ? "Выберите время" : "Нет доступных слотов"} />
                                </SelectTrigger>
                                <SelectContent>
                                    {timeSlots.map((slot) => (
                                        <SelectItem key={slot} value={slot}>
                                            {slot}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            {errors.time && <p className="text-sm text-destructive">{errors.time}</p>}
                        </div>
                    )}

                    <div className="space-y-2">
                        <Label htmlFor="name">Ваше имя *</Label>
                        <Input
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Анна"
                        />
                        {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="phone">Телефон *</Label>
                        <Input
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+7 (999) 123-45-67"
                        />
                        {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="comment">Комментарий</Label>
                        <Textarea
                            id="comment"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder="Пожелания мастеру..."
                        />
                    </div>

                    <Button type="submit" className="w-full">
                        Записаться
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}